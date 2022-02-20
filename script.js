let ws = new WebSocket('wss://e331.f5.si:81')
var peer = new RTCPeerConnection({
    "iceServers": [{"url": "stun:stun.l.google.com:19302"}]
});
var dataChannel = peer.createDataChannel('RTCDataChannel');

// Offer送信
peer.createOffer(function(sdp) {
    // 引数のSDPは自分用
    peer.setLocalDescription(function() {
        // セット完了したら、相手に自分のSDPを送る
        ws.send(JSON.stringify({
            "sdp": sdp,     // これ、自分の。
            "to" : to_uuid  // 君に届け
        }));
    });
});

// websocketのメッセージイベントで受け取る
ws.onmessage = function(evt) {
    var message = JSON.parse(evt.data)
    var sdp;
    if ( message.sdp ) {
        sdp = new RTCSessionDescription(message.sdp);
        // 相手用（remote）にセット
        peer.setRemoteDescription(function(sdp) {
            // 自分へのOffer-SDPだったらAnswerを返す
            if ( sdp.type === "offer" ) {
                // ファイナルアンサー
            }
        });
    }
};



peer.onicecandidate = function(evt) {
    var candidate;
    // evt.candidateプロパティにデータが入っているので、WebSocketでデータを共有するため送信
    if ( evt.candiate ) {
        ws.send(JSON.stringify({"candidate": evt.candidate}));
    }
};

// websokcetのメッセージハンドラ内で送信されてきたデータを復元してセットする
ws.onmessage = function(evt) {
    var message = JSON.parse(evt.data)
    //var candidate;
    // evt.candidateがあればCandidateの共有
    if ( evt.candidate ) {
        // candidateってなんか甘そうだよね
        candidate = new RTCIceCandidate(evt.candidate);
        peer.addIceCandidate(candidate);
    }
};

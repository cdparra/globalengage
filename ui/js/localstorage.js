// JavaScript Document
var storage = $.localStorage;

function SetUserCode(code) {
    storage.set('userCode', code);
}

function GetUserCode() {
    return storage.get('userCode');
}


// JavaScript Document
var storage = $.localStorage;

function SetBaseUrl(baseUrl) {
    storage.set('baseUrl', baseUrl);
}

function GetBaseUrl() {
    return storage.get('baseUrl');
}

function SetSessionKey(Key)
{
	storage.set('sessionKey',Key);
}


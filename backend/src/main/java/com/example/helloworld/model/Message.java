package com.example.helloworld.model;

public class Message {
    private String text;
    private String timestamp;
    private String version;

    public Message() {
    }

    public Message(String text, String timestamp, String version) {
        this.text = text;
        this.timestamp = timestamp;
        this.version = version;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }
}

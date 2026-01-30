package com.example.helloworld.controller;

import com.example.helloworld.model.Message;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class HelloWorldController {

    @GetMapping("/hello")
    public Message getHelloMessage() {
        Message message = new Message();
        message.setText("Hello World from Spring Boot!");
        message.setTimestamp(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        message.setVersion("1.0.0");
        return message;
    }

    @GetMapping("/hello/{name}")
    public Message getPersonalizedHello(@PathVariable String name) {
        Message message = new Message();
        message.setText("Hello " + name + " from Spring Boot!");
        message.setTimestamp(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        message.setVersion("1.0.0");
        return message;
    }

    @PostMapping("/hello")
    public Message postHelloMessage(@RequestBody String name) {
        Message message = new Message();
        message.setText("Hello " + name + "! Your message was received.");
        message.setTimestamp(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        message.setVersion("1.0.0");
        return message;
    }
}

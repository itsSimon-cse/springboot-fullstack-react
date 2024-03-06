package com.example.emsbackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourceNotfoundException extends RuntimeException{
	
	public ResourceNotfoundException (String message) {
		super(message);
	}
	
	

}

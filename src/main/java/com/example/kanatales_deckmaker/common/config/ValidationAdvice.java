package com.example.kanatales_deckmaker.common.config;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.*;

@Component
@Aspect
@Slf4j
public class ValidationAdvice {

    @Around("execution(* com.example.kanatales_deckmaker..*Controller.*(..))")
    public Object valid(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        Object[] args = proceedingJoinPoint.getArgs();

        for (Object arg : args) {
            if(arg instanceof BindingResult){
                System.out.println("args:"+arg);
                BindingResult bindingResult = (BindingResult) arg;

                if(bindingResult.hasErrors()){
                    List<ValidationDto> validationDtos = new ArrayList<>();
                    String TypeName = proceedingJoinPoint.getSignature().getDeclaringTypeName();
                    String name = proceedingJoinPoint.getSignature().getName();
                    List<FieldError> fieldErrors = bindingResult.getFieldErrors();
                    fieldErrors.forEach( error -> {
                        validationDtos.add(ValidationDto.builder().fieldName(error.getField()).message(error.getDefaultMessage()).build());
                        log.warn(TypeName+"."+name+"() -> 필드명:"+error.getField()+"메세지:"+error.getDefaultMessage());
                    });
                    return new ResponseEntity<>(validationDtos,HttpStatus.BAD_REQUEST);
                }
            }
        }


        return proceedingJoinPoint.proceed();
    }





}

package com.coinPrediction.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {

    private static final Contact contact = new Contact("Seoyung Kim",
            "https://velog.io/@ks0624", "kskyung0624@gmail.com");

    private static final ApiInfo apiInfo = new ApiInfoBuilder()
            .title("Coin Prediction Contest Swagger").description("Swagger for Coin Prediction Contest in Chungnam National Univ.")
            .version("1.0").contact(contact).build();

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.OAS_30)
                .apiInfo(apiInfo);
    }

}

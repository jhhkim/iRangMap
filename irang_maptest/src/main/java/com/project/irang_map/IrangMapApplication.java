package com.project.irang_map;

import com.samskivert.mustache.Mustache;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mustache.MustacheEnvironmentCollector;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing

@SpringBootApplication
public class IrangMapApplication {

	public static void main(String[] args) {
		SpringApplication.run(IrangMapApplication.class, args);
	}
//There was an unexpected error (type=Internal Server Error, status=500).
//No method or field with name 'addr' on line 52
//에러나서 추가
//https://mkyong.com/spring-boot/spring-boot-and-mustache-default-value/
	@Bean
    public Mustache.Compiler mustacheCompiler(Mustache.TemplateLoader mustacheTemplateLoader,
                                              Environment environment) {

        MustacheEnvironmentCollector collector = new MustacheEnvironmentCollector();
        collector.setEnvironment(environment);

		// default value
        Mustache.Compiler compiler = Mustache.compiler().defaultValue("")
			.withLoader(mustacheTemplateLoader)
            .withCollector(collector);
        return compiler;

    }

}


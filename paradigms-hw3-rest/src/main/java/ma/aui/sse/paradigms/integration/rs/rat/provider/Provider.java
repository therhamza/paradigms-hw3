package ma.aui.sse.paradigms.integration.rs.rat.provider;
import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main class for the Provider application.
 * 
 * This class is annotated with the @SpringBootApplication annotation, which 
 * tells Spring Boot to use this class as the starting point for the application.
 */
@SpringBootApplication
public class Provider {

    /**
     * The main method for the Provider application.
     * 
     * This method sets the 'java.awt.headless' system property to 'false' and 
     * then runs the SpringApplication.run method, passing in the Provider class
     * and the command line arguments as arguments.
     * 
     * @param args the command line arguments passed to the application
     */
    public static void main(String[] args) {
        System.setProperty("java.awt.headless", "false");
        SpringApplication.run(Provider.class, args);
    }
    
}

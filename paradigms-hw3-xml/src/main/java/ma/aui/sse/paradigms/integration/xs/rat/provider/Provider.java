package ma.aui.sse.paradigms.integration.xs.rat.provider;

import javax.xml.ws.Endpoint;

public class Provider {

    private static final String URL = "http://localhost:8080/rat";

    public static void main(String[] args) {
        System.setProperty("java.awt.headless", "false");
        RemoteAccessUtility remoteAccessUtility = new RemoteAccessUtility();
        System.out.println("Publishing RemoteAccessUtility Service");
        Endpoint.publish(URL, remoteAccessUtility);
        System.out.println("RemoteAccessUtility Service Published");
    }
    
}

package ma.aui.sse.paradigms.integration.xs.rat.provider;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Optional;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import javax.jws.WebService;
import java.awt.Rectangle;
import java.awt.Toolkit;
import java.awt.Robot;

@WebService
public class RemoteAccessUtility {

    public ArrayList<String> getProcesses() {

        ArrayList<String> listOfAllProcesses = new ArrayList<String>();
            
        StringBuilder processes = new StringBuilder("");

        ProcessHandle.allProcesses().forEach(
            process -> listOfAllProcesses.add(processDetails(process)) 
        );

        return listOfAllProcesses;

    }

    public String screenshot() {

        try {

            Rectangle screenRect = new Rectangle(Toolkit.getDefaultToolkit().getScreenSize());
            BufferedImage screenshot = new Robot().createScreenCapture(screenRect);

            String extension = "png";

            return encodeToString(screenshot, extension);

        } 
        catch (Exception ex) {
            
            return "";

        }
    }

    public boolean reboot() {

        try {

            ProcessBuilder builder = System.getProperty("os.name").toLowerCase().contains("win")
                    ? new ProcessBuilder("shutdown", "-r", "-t", "1")
                    : new ProcessBuilder("shutdown", "-r", "now");

            Process process = builder.start();

            return true;

        } 
        catch (Exception ex) {
            
            return false;

        }
							
    }

    private static String processDetails(ProcessHandle process) {

		return String.format("%8d %8s %10s %-40s",
				process.pid(),
				text(process.parent().map(ProcessHandle::pid)),
				text(process.info().user()),
                text(process.info().commandLine()));
                
	}
	
    private static String text(Optional<?> optional) {

        return optional.map(Object::toString).orElse("-");

    }

    private static String encodeToString(BufferedImage image, String type) {
         
        String imageString = null;  
        ByteArrayOutputStream bos = new ByteArrayOutputStream();  

        try {
            
            ImageIO.write(image, type, bos);  
            byte[] imageBytes = bos.toByteArray();  
            imageString = Base64.getEncoder().encodeToString(imageBytes);  
            bos.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return imageString;
        
    } 
    
}
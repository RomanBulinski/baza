package rom.buulean.baza.controllers;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.net.ConnectException;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/to-mediator-api")
public class MediatorApiController {

    RestTemplate restTemplate = new RestTemplate();
    String MEDIATOR_URL = "http://localhost:8012/mediator-api";

    @GetMapping("/get")
    public ResponseEntity<Map<String, String>> getAllItems() {
        ResponseEntity<String> responseFromMediator;
        Map<String, String> jsonResponse = new HashMap<>();
        try {
            responseFromMediator = restTemplate.getForEntity(MEDIATOR_URL+"/get", String.class);
            jsonResponse.put("message", responseFromMediator.getBody());
            return new ResponseEntity<>(jsonResponse, HttpStatus.OK);
        } catch (RestClientException  e) {
            log.error("Brak połączenia z Mediatorem :{}", String.valueOf(e));
            jsonResponse.put("message", "Brak połączenia z Mediatorem");
            return new ResponseEntity<>( jsonResponse,HttpStatus.NOT_FOUND);
        }
    }
}

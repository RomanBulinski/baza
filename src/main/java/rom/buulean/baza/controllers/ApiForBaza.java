package rom.buulean.baza.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ApiForBaza {

    @GetMapping("/get")
    public ResponseEntity<String> getAllItems() {
        return new ResponseEntity<>("\"jest test\"", HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> createItem(@RequestBody String string) {
        return new ResponseEntity<>("jeeeeeeeest", HttpStatus.CREATED);
    }


}

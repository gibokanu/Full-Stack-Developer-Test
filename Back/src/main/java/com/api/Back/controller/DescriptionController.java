package com.api.Back.controller;

import com.api.Back.models.Description;
import com.api.Back.repo.DescriptionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author GibrillaKanu
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class DescriptionController {

    @Autowired
    DescriptionRepo descriptionRepo;

    //Get All Description
    @GetMapping("/description")
    public ResponseEntity<List<Description>> getAllDescription(@RequestParam(required = false) String title) {
        try {
            List<Description> descriptions = new ArrayList<Description>();

            if (title == null)
                descriptionRepo.findAll().forEach(descriptions::add);
            else
                descriptionRepo.findByTitleContaining(title).forEach(descriptions::add);

            if (descriptions.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(descriptions, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get Description By Id
    @GetMapping("/descriptions/{id}")
    public ResponseEntity<Description> getDescriptionById(@PathVariable("id") long id) {
        Optional<Description> descriptionsData = descriptionRepo.findById(id);

        if (descriptionsData.isPresent()) {
            return new ResponseEntity<>(descriptionsData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    // Create Description
    @PostMapping("/descriptions")
    public ResponseEntity<Description> createDescription(@RequestBody Description description) {
        try {
            Description _descriptions = descriptionRepo
                    .save(new Description(description.getTitle(), description.getDescription()));
            return new ResponseEntity<>(description, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Update Description
    @PutMapping("/descriptions/{id}")
    public ResponseEntity<Description> updateDescription(@PathVariable("id") long id, @RequestBody Description description) {
        Optional<Description> descriptionData = descriptionRepo.findById(id);

        if (descriptionData.isPresent()) {
            Description _description = descriptionData.get();
            _description.setTitle(description.getTitle());
            _description.setDescription(description.getDescription());
            return new ResponseEntity<>(descriptionRepo.save(_description), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // delete Description By Id
    @DeleteMapping("/descriptions/{id}")
    public ResponseEntity<HttpStatus> deleteDescription(@PathVariable("id") long id) {
        try {
            descriptionRepo.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Delete All Descriptions
    @DeleteMapping("/descriptions")
    public ResponseEntity<HttpStatus> deleteAllDescriptions() {
        try {
            descriptionRepo.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}


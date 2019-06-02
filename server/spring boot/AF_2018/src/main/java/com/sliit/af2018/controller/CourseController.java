package com.sliit.af2018.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sliit.af2018.models.Course;
import com.sliit.af2018.service.CourseService;

@RestController
@RequestMapping("/course")
@CrossOrigin(origins="*")
public class CourseController {

	@Autowired
	private CourseService courseService;
	
	@RequestMapping(method= RequestMethod.GET , value="/calculate/{id}")
	public ResponseEntity<Course> calculate(@PathVariable("id") String id){
		Course course = courseService.find(id);
		return new ResponseEntity<Course>(course , HttpStatus.OK);
	}
	
}

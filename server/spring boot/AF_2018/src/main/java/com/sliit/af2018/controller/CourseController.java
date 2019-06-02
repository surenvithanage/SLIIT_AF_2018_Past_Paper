package com.sliit.af2018.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sliit.af2018.models.Course;
import com.sliit.af2018.models.Subject;
import com.sliit.af2018.service.CourseService;
import com.sliit.af2018.service.SubjectService;

@RestController
@RequestMapping("/course")
@CrossOrigin(origins="*")
public class CourseController {

	@Autowired
	private CourseService courseService;
	@Autowired
	private SubjectService subjectService;
	
	@RequestMapping(method= RequestMethod.GET , value="/calculate/{id}")
	public ResponseEntity<Integer> calculate(@PathVariable("id") String id){
		Course course = courseService.find(id);
		int amount = 0;
		List<String> subject_id = new ArrayList<>();
		subject_id = course.getSubject();
		for(int i = 0 ; i < subject_id.size() ; i++) {
			String subId = subject_id.get(i);
			Subject subject = subjectService.find(subId);
			amount += Integer.parseInt(subject.getAmount());
		}
		return new ResponseEntity<Integer>(amount , HttpStatus.OK);
	}
	
}

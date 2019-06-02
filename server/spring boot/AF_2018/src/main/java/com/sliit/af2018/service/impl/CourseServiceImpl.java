package com.sliit.af2018.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sliit.af2018.models.Course;
import com.sliit.af2018.repository.CourseRepository;
import com.sliit.af2018.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Override
	public Course find(String id) {
		Course course = courseRepository.findById(id).orElse(null);
		return course;
	}

}

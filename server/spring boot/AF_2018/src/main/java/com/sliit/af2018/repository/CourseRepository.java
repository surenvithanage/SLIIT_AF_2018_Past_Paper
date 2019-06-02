package com.sliit.af2018.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.sliit.af2018.models.Course;

@Repository
public interface CourseRepository extends MongoRepository<Course, String>{

}

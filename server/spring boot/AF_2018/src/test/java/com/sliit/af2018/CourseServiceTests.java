package com.sliit.af2018;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.sliit.af2018.models.Course;
import com.sliit.af2018.repository.CourseRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CourseServiceTests {

	@MockBean
	CourseRepository courseRepository;

	@Before
	public void setup() {
		Course course = new Course("dummy", "123", "79", "test", Arrays.asList("1", "2"));
		when(courseRepository.findById("1")).thenReturn(Optional.of(course));
	}

	@Test
	public void whenValidId_thenCourseShouldReturn() {
		Course course = courseRepository.findById("1").get();
		assertEquals("123", course.getCode());
	}

}

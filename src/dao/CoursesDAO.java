package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import util.DBHelper;
import entity.Courses;

public class CoursesDAO {
	//获取所有课程信息
	public ArrayList<Courses> getAllCourses() throws Exception {
		Connection conn = null;
		PreparedStatement stmt = null;
		ResultSet rs = null;
		
		ArrayList<Courses> courses = new ArrayList<Courses>();
		try {
			conn = DBHelper.getConnection();
			String sql = "select * from courses";
			stmt = conn.prepareStatement(sql);
			rs = stmt.executeQuery();
			while(rs.next()) {
				Courses course = new Courses();
				course.setId(rs.getInt("id"));
				course.setName(rs.getString("name"));
				course.setBriefInfo(rs.getString("briefInfo"));
				course.setDifficulty(rs.getInt("difficulty"));
				courses.add(course);
			}
			return courses;
		}catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}finally {
			if(rs != null) {
				rs.close();
				rs = null;
			}
			if(stmt != null) {
				stmt.close();
				stmt = null;
			}
		}
	}
	//根据课程编号获取某课程的详细信息
	public String getCourseById(int id) throws Exception {
		Connection conn = null;
		PreparedStatement stmt = null;
		ResultSet rs = null;
		try {
			conn = DBHelper.getConnection();
			String sql = "select * from courses where id=?";
			stmt = conn.prepareStatement(sql);
			stmt.setInt(1, id);
			rs = stmt.executeQuery();
			if(rs.next()) {
				String detailInfo = rs.getString("detailInfo");
				return detailInfo;
			}else {
				return "";
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			return "";
		}finally {
			if(rs != null) {
				rs.close();
				rs = null;
			}
			if(stmt != null) {
				stmt.close();
				stmt = null;
			}
		}
	}
	//
}

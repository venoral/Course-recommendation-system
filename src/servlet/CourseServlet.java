package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import dao.CoursesDAO;
import entity.Courses;

@WebServlet("/CourseServlet")
public class CourseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String action;
	private CoursesDAO cdao = new CoursesDAO();
       
    public CourseServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/plain; charset=utf-8");
		PrintWriter outer = response.getWriter();
		
		if(request.getParameter("action") != null) {
			this.action = request.getParameter("action");
			if(action.equals("getall")) {
				try {
					ArrayList<Courses> courses = cdao.getAllCourses();
					if(courses != null && courses.size() > 0) {
						JSONArray jsonCourses = new JSONArray();
						for(int i=0; i< courses.size(); i++) {
							Courses course = courses.get(i);
							JSONObject c = new JSONObject();
							c.put("id", course.getId());
							c.put("name", course.getName());
							c.put("briefInfo", course.getBriefInfo());
							jsonCourses.put(c);
						}
						outer.println(jsonCourses.toString());
					}
				} catch (Exception e) {
					outer.println("数据获取失败！");
					e.printStackTrace();
				}
			}else if(action.equals("getdetail")) {
				String preId = request.getParameter("preId");
				String curId = request.getParameter("curId");
				String costTime = request.getParameter("costTime");
				if(preId != null) {
					//若停留时间超过4s则认为用户注视有困难
					if(costTime != null && Double.parseDouble(costTime) > 4000) {
						try {
							JSONObject c = new JSONObject();
							c.put("id", Integer.parseInt(preId));
							c.put("detailInfo", cdao.getCourseById(Integer.parseInt(preId)));
							outer.println(c.toString());
						} catch (Exception e) {
							outer.println("数据获取失败！");
							e.printStackTrace();
						}
					}else {
						try {
							JSONObject e = new JSONObject();
							e.put("msg", "停留时间不足4s，不认为是阅读有困难！");
							outer.println(e.toString());
						} catch (JSONException e1) {
							e1.printStackTrace();
						}
					}
				}
			}
		}
	}

}

package util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBHelper {
	private static final String driver = "com.mysql.jdbc.Driver"; //链接数据库驱动变量
	//数据库url
	private static final String url = "jdbc:mysql://localhost:3306/webgazer_courses?useUnicode=true&characterEncoding=UTF-8";
	private static final String username = "root";
	private static final String password = "789sixin789";
	
	private static Connection conn = null;
	//使用静态块加载驱动
	static {
		try {
			Class.forName(driver); 
		}catch(Exception ex) {
			ex.printStackTrace();
		}
	}
	
	//返回一个数据库链接对象，单例
	public static Connection getConnection() throws Exception {
		if(conn == null) {
			conn = DriverManager.getConnection(url, username, password);
		}
		return conn;
	}
}

package hiveweb.tablesweb;

import com.google.gson.Gson;
import hiveweb.service.impl.UserServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet(name = "pic4Servlet", value = "/pic4")
public class Pic4Servlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private UserServiceImpl pic4Service;

    @Override
    public void init() throws ServletException {
        super.init();
        pic4Service = new UserServiceImpl();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        try {
            // 获取PncService层返回的不同街区列表
            List<String> rcitys = pic4Service.getrcitys();

            // 获取前端传递的参数 neighborhood
            String requestedrcity = request.getParameter("rcity");

            // 构建数据集合
            List<String> revenueList = pic4Service.getpic4ListByRcity(requestedrcity);
            List<String> yearList = pic4Service.getYears();
            List<String> cavgrevenueList = pic4Service.getcavgrevenues(requestedrcity);

            // 构建数据集合
            Map<String, List<String>> dataMap = new HashMap<>();
            dataMap.put("year", yearList);
            dataMap.put("revenue", revenueList);
            dataMap.put("cavgrevenue", cavgrevenueList);

            // 将数据转换为 JSON 格式
            Gson gson = new Gson();
            String jsonData = gson.toJson(dataMap);

            // 返回 JSON 数据
            out.println(jsonData);
        } catch (Exception e) {
            e.printStackTrace();
            // 处理异常并返回错误响应（如果需要）
        }
    }
}

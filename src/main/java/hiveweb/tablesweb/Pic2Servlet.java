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

@WebServlet(name = "pic2Servlet", value = "/pic2")
public class Pic2Servlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private UserServiceImpl pic2Service;

    @Override
    public void init() throws ServletException {
        super.init();
        pic2Service = new UserServiceImpl();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        try {
            // 获取PncService层返回的不同街区列表
            List<String> years = pic2Service.getYears();

            // 获取前端传递的参数 neighborhood
            String requestedyear = request.getParameter("year");

            // 构建数据集合
            List<String> volumeList = pic2Service.getvolumeListByYear(requestedyear);
            List<String> vgrowthList = pic2Service.getvgrowthListByYear(requestedyear);
            List<String> revenueList = pic2Service.getrevenueListByYear(requestedyear);
            List<String> rgrowthList = pic2Service.getrgrowthListByYear(requestedyear);
            List<String> unitList = pic2Service.getunits();


            // 构建数据集合
            Map<String, List<String>> dataMap = new HashMap<>();
            dataMap.put("unit", unitList);
            dataMap.put("volume", volumeList);
            dataMap.put("vgrowth", vgrowthList);
            dataMap.put("revenue", revenueList);
            dataMap.put("rgrowth", rgrowthList);

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

package hiveweb.tablesweb;

import com.google.gson.Gson;
import hiveweb.service.IUserService;
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

@WebServlet(name = "pic3Servlet", value = "/pic3")
public class Pic3Servlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private IUserService pic3Service;

    @Override
    public void init() throws ServletException {
        super.init();
        pic3Service = new UserServiceImpl(); // Initialize the NrpcService implementation
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        try {
            // Retrieve distinct neighbourhoods and rooms from the service layer
            List<String> indicators = pic3Service.getpic3indicators();

            // Retrieve requested neighbourhood and room from the request parameters
            String requestedindIcator = request.getParameter("indicator");

            // Query the data based on the requested neighbourhood and room
            List<String> accumulateList = pic3Service.getpic3accumulateListByYearAndIndicator(requestedindIcator);
            List<String> agrowthList = pic3Service.getpic3agrowthListByYearAndIndicator(requestedindIcator);
            List<String> yearList = pic3Service.getYears();


            // Construct the data map
            Map<String, List<String>> dataMap = new HashMap<>();
            dataMap.put("agrowth", agrowthList);
            dataMap.put("accumulate", accumulateList);
            dataMap.put("year", yearList);

            // Convert data to JSON format
            Gson gson = new Gson();
            String jsonData = gson.toJson(dataMap);

            // Return JSON data
            out.println(jsonData);
        } catch (Exception e) {
            e.printStackTrace();
            // Handle the exception and return an error response if needed
        }
    }
}

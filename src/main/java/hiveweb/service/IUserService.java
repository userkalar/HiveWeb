package hiveweb.service;

import hiveweb.domain.User;

import java.util.List;

public interface IUserService {
    //登录使用-获取全部用户信息
    User login(String username, String password);

    //获取表中不同查询条件

    //获取Year条件
    List<String> getYears();
    //获取indicator
    List<String> getindicators(String year);
    List<String> getcavgrevenues(String rcity);
    List<String> getcavgvolumes(String vcity);
    List<String> getunits();
    //获取pic3中使用的函件，包裹，快递业务，汇兑条件
    List<String> getpic3indicators();
    //获取Rcity条件
    List<String> getrcitys();
    //获取Vcity条件
    List<String> getvcitys();

    //实现各图所需要数据

    //获取Pic1part1部分数据
    List<String> getPic1part1ListByYear(String year);

    //获取Pic1part2部分数据
    List<String> getPic1part2ListByYear(String year);

    //获取Pic2部分数据

    //获取Pic2中volume数据
    List<String> getvolumeListByYear(String year);
    //获取Pic2中vgrowth数据
    List<String> getvgrowthListByYear(String year);
    //获取Pic2中revenue数据
    List<String> getrevenueListByYear(String year);
    //获取Pic2中rgrowth数据
    List<String> getrgrowthListByYear(String year);

    //获取Pic3部分数据

    //获取Pic3中accumulate数据
    List<String> getpic3accumulateListByYearAndIndicator(String indicator);
    //获取Pic3中agrowth数据
    List<String> getpic3agrowthListByYearAndIndicator(String indicator);

    //获取Pic4部分数据
    List<String> getpic4ListByRcity(String rcity);

    //获取Pic5部分数据
    List<String> getpic5ListByVcity(String vcity);

}

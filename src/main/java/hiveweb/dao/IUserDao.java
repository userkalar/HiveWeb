package hiveweb.dao;

import hiveweb.domain.User;

import java.util.List;

public interface IUserDao {
    //获取全部用户信息
    User queryByUsernameAndPassword(String usernamr, String password);
    //获取Year条件
    List<String> getYears();
    List<String> getindicators(String year);
    List<String> getcavgrevenues(String rcity);
    List<String> getcavgvolumes(String vcity);
    List<String> getunits();
    List<String> getpic3indicators();
    List<String> getrcitys();
    List<String> getvcitys();

    //本次使用
    List<String> getPic1Part1ListByYear(String year);
    List<String> getPic1Part2ListByYear(String year);
    List<String> getvolumeListByYear(String year);
    List<String> getvgrowthListByYear(String year);
    List<String> getrevenueListByYear(String year);
    List<String> getrgrowthListByYear(String year);
    List<String> getpic3accumulateListByYearAndIndicator(String indicator);
    List<String> getpic3agrowthListByYearAndIndicator(String indicator);
    List<String> getpic4ListByRcity(String rcity);
    List<String> getpic5ListByVcity(String vcity);

}


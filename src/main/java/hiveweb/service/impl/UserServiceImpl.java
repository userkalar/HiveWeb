package hiveweb.service.impl;

import hiveweb.dao.IUserDao;
import hiveweb.dao.impl.UserDaoImpl;
import hiveweb.domain.User;
import hiveweb.service.IUserService;

import java.util.List;

public class UserServiceImpl implements IUserService {
    private IUserDao dao = new UserDaoImpl();

    //获取全部用户信息
    public User login(String username, String password) {
        return dao.queryByUsernameAndPassword(username, password);
    }
    @Override
    public List<String> getYears() {
        return dao.getYears();
    }
    @Override
    public List<String> getindicators(String year) {
        return dao.getindicators(year);
    }
    @Override
    public List<String> getcavgrevenues(String rcity) {
        return dao.getcavgrevenues(rcity);
    }
    @Override
    public List<String> getcavgvolumes(String vcity) {
        return dao.getcavgvolumes(vcity);
    }

    @Override
    public List<String> getunits() {
        return dao.getunits();
    }

    @Override
    public List<String> getpic3indicators() {
        return dao.getpic3indicators();
    }
    @Override
    public List<String> getrcitys() {
        return dao.getrcitys();
    }
    @Override
    public List<String> getvcitys() {
        return dao.getvcitys();
    }


    @Override
    //本次使用
    public List<String> getPic1part1ListByYear(String year) {
        return dao.getPic1Part1ListByYear(year);
    }
    @Override
    public List<String> getPic1part2ListByYear(String year) {
        return dao.getPic1Part2ListByYear(year);
    }
    @Override
    public List<String> getvolumeListByYear(String year) {
        return dao.getvolumeListByYear(year);
    }
    @Override
    public List<String> getvgrowthListByYear(String year) {
        return dao.getvgrowthListByYear(year);
    }
    @Override
    public List<String> getrevenueListByYear(String year) {
        return dao.getrevenueListByYear(year);
    }
    @Override
    public List<String> getrgrowthListByYear(String year) {
        return dao.getrgrowthListByYear(year);
    }
    @Override
    public List<String> getpic3accumulateListByYearAndIndicator(String indicator) {
        return dao.getpic3accumulateListByYearAndIndicator(indicator);
    }
    @Override
    public List<String> getpic3agrowthListByYearAndIndicator(String indicator) {
        return dao.getpic3agrowthListByYearAndIndicator(indicator);
    }
    @Override
    public List<String> getpic4ListByRcity(String rcity) {
        return dao.getpic4ListByRcity(rcity);
    }
    @Override
    public List<String> getpic5ListByVcity(String vcity) {
        return dao.getpic5ListByVcity(vcity);
    }

}

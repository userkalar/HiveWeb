package hiveweb.dao.impl;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import hiveweb.dao.IUserDao;
import hiveweb.domain.User;
import hiveweb.utils.DbUtil;
import hiveweb.utils.JdbcUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDaoImpl implements IUserDao {
    private QueryRunner runner = new QueryRunner(JdbcUtil.getDataSource());

    @Override//获取全部用户信息
    public User queryByUsernameAndPassword(String username, String password) {
        String sql = "SELECT * FROM userdata WHERE username=? AND `password`=?";
        try {
            // 2、通过runner执行SQL语句
            User user = runner.query(sql, new BeanHandler<>
                    (User.class), username, password);
            return user;
        } catch (SQLException e) {
            throw new RuntimeException("登录出现异常", e);
        }
    }

    @Override
    public List<String> getYears() {
        List<String> years = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection();

            String yearSql = "SELECT DISTINCT year FROM ads_rpt_board_pic1part1_1y_y";
            pstmt = conn.prepareStatement(yearSql);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                String year = rs.getString("year");
                years.add(year);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs);
        }

        return years;
    }
    @Override
    public List<String> getunits() {
        List<String> units = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection();

            String unitSql = "SELECT DISTINCT unit FROM ads_rpt_board_pic2_1y_y WHERE unit != '全国'";
            pstmt = conn.prepareStatement(unitSql);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                String unit = rs.getString("unit");
                units.add(unit);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs);
        }

        return units;
    }
    @Override
    public List<String> getpic3indicators() {
        List<String> indicators = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection();

            String indicatorSql = "SELECT DISTINCT indicator FROM ads_rpt_board_pic1part1_1y_y WHERE indicator='函件' OR indicator='包裹' OR indicator='汇兑' OR indicator='快递业务'";
            pstmt = conn.prepareStatement(indicatorSql);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                String indicator = rs.getString("indicator");
                indicators.add(indicator);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs);
        }

        return indicators;
    }
    @Override
    public List<String> getrcitys() {
        List<String> rcitys = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection();

            String rcitySql = "SELECT DISTINCT rcity FROM ads_rpt_board_pic4_1y_y";
            pstmt = conn.prepareStatement(rcitySql);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                String rcity = rs.getString("rcity");
                rcitys.add(rcity);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs);
        }

        return rcitys;
    }
    @Override
    public List<String> getvcitys() {
        List<String> vcitys = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection();

            String vcitySql = "SELECT DISTINCT vcity FROM ads_rpt_board_pic5_1y_y";
            pstmt = conn.prepareStatement(vcitySql);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                String vcity = rs.getString("vcity");
                vcitys.add(vcity);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs);
        }

        return vcitys;
    }

    //本次使用
    @Override
    public List<String> getPic1Part1ListByYear(String year) {
        List<String> accumulateList = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection(); // Get database connection

            String sql = "SELECT accumulate FROM ads_rpt_board_pic1part1_1y_y WHERE year = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, year);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                String accumulate = rs.getString("accumulate");
                accumulateList.add(accumulate);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs); // Close database resources
        }

        return accumulateList;
    }
    @Override
    public List<String> getindicators(String year) {
        List<String> indicatorList = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection(); // Get database connection

            String sql = "SELECT indicator FROM ads_rpt_board_pic1part1_1y_y WHERE year = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, year);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                String indicator = rs.getString("indicator");
                indicatorList.add(indicator);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs); // Close database resources
        }

        return indicatorList;
    }
    @Override
    public List<String> getcavgrevenues(String rcity) {
        List<String> cavgrevenueList = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection(); // Get database connection

            String sql = "SELECT cavgrevenue FROM ads_rpt_board_pic4_1y_y WHERE rcity = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, rcity);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                String cavgrevenue = rs.getString("cavgrevenue");
                cavgrevenueList.add(cavgrevenue);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs); // Close database resources
        }

        return cavgrevenueList;
    }
    @Override
    public List<String> getcavgvolumes(String vcity) {
        List<String> cavgvolumeList = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection(); // Get database connection

            String sql = "SELECT cavgvolume FROM ads_rpt_board_pic5_1y_y WHERE vcity = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, vcity);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                String cavgvolume = rs.getString("cavgvolume");
                cavgvolumeList.add(cavgvolume);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs); // Close database resources
        }

        return cavgvolumeList;
    }

    @Override
    public List<String> getPic1Part2ListByYear(String year) {
        List<String> accumulateList = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection(); // Get database connection

            String sql = "SELECT accumulate FROM ads_rpt_board_pic1part2_1y_y WHERE year = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, year);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                String accumulate = rs.getString("accumulate");
                accumulateList.add(accumulate);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs); // Close database resources
        }

        return accumulateList;
    }

    @Override
    public List<String> getvolumeListByYear(String year) {
        List<String> volumeList = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection(); // Get database connection

            String sql = "SELECT volume FROM ads_rpt_board_pic2_1y_y WHERE unit != '全国' AND year = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, year);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                String volume = rs.getString("volume");
                volumeList.add(volume);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs); // Close database resources
        }

        return volumeList;
    }

    @Override
    public List<String> getvgrowthListByYear(String year) {
        List<String> vgrowthList = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection(); // Get database connection

            String sql = "SELECT vgrowth FROM ads_rpt_board_pic2_1y_y WHERE unit != '全国' AND year = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, year);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                String vgrowth = rs.getString("vgrowth");
                vgrowthList.add(vgrowth);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs); // Close database resources
        }

        return vgrowthList;
    }

    @Override
    public List<String> getrevenueListByYear(String year) {
        List<String> revenueList = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection(); // Get database connection

            String sql = "SELECT revenue FROM ads_rpt_board_pic2_1y_y WHERE unit != '全国' AND year = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, year);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                String revenue = rs.getString("revenue");
                revenueList.add(revenue);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs); // Close database resources
        }

        return revenueList;
    }

    @Override
    public List<String> getrgrowthListByYear(String year) {
        List<String> rgrowthList = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection(); // Get database connection

            String sql = "SELECT rgrowth FROM ads_rpt_board_pic2_1y_y WHERE unit != '全国' AND year = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, year);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                String revenue = rs.getString("rgrowth");
                rgrowthList.add(revenue);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs); // Close database resources
        }

        return rgrowthList;
    }
    @Override
    public List<String> getpic3accumulateListByYearAndIndicator(String indicator) {
        List<String> accumulateList = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection(); // Get database connection

            String sql = "SELECT accumulate FROM ads_rpt_board_pic1part1_1y_y WHERE indicator = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, indicator);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                String accumulate = rs.getString("accumulate");
                accumulateList.add(accumulate);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs); // Close database resources
        }

        return accumulateList;
    }
    @Override
    public List<String> getpic3agrowthListByYearAndIndicator(String indicator) {
        List<String> agrowthList = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection(); // Get database connection

            String sql = "SELECT agrowth FROM ads_rpt_board_pic1part1_1y_y WHERE indicator = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, indicator);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                String agrowth = rs.getString("agrowth");
                agrowthList.add(agrowth);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs); // Close database resources
        }

        return agrowthList;
    }
    @Override
    public List<String> getpic4ListByRcity(String rcity) {
        List<String> revenueList = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection(); // Get database connection

            String sql = "SELECT revenue FROM ads_rpt_board_pic4_1y_y WHERE rcity = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, rcity);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                String revenue = rs.getString("revenue");
                revenueList.add(revenue);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs); // Close database resources
        }

        return revenueList;
    }
    @Override
    public List<String> getpic5ListByVcity(String vcity) {
        List<String> volumeList = new ArrayList<>();
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            conn = DbUtil.getConnection(); // Get database connection

            String sql = "SELECT volume FROM ads_rpt_board_pic5_1y_y WHERE vcity = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, vcity);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                String revenue = rs.getString("volume");
                volumeList.add(revenue);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DbUtil.closeResources(conn, pstmt, rs); // Close database resources
        }

        return volumeList;
    }

}

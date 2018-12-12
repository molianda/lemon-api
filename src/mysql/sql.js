module.exports = {
    //创建用户
    'ADD_USER': 'insert into userlist(uid,nick_name) values(?,?)',
    //查询图标列表
    'SELECT_ICON': 'select * from iconlist',
    //添加分类
    'ADD_CLASSIFY': 'insert into classify(cid,c_name,c_icon,type,uid) values(?,?,?,?,?)',
    //查询分类是否存在
    'ISHAS_CLASSIFY': 'select * from classify where (uid="*" or uid=?) and c_name=? and type=?',
    //查询一个人的所有分类
    'SELECT_ALL_C': 'select * from classify where(uid="*" or uid=?)',
    //添加账单 谁（uid）在什么时间（timer）干什么（cid）支出/收入（type）多少钱（money） lid（账单id）
    'ADD_BILL': 'insert into bill_list(lid,uid,cid,timer,money) values(?,?,?,?,?)',
    //按年查询账单
    'SELECT_YEAR_BILL': 'select b.*,c.c_icon,c_name,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and b.uid=u.uid and date_format(b.timer,"%Y")=?',
    //按月查询账单
    'SELECT_MONTH_BILL': 'select b.*,c.c_icon,c_name,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and b.uid=u.uid and date_format(b.timer,"%Y-%m")=?',
    //按时间+分类查询账单
    //按年查询
    'SELECT_YEAR_CBILL': 'select b.*,c.c_icon,c_name,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and b.uid=u.uid and date_format(b.timer,"%Y")=? and c.c_name in (?)',
    //按月查询
    'SELECT_MONTH_CBILL': 'select b.*,c.c_icon,c_name,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and b.uid=u.uid and date_format(b.timer,"%Y")=? and c.c_name in (?)',
    //删除账单
    'DELETE_BILL': 'delete from bill_list where lid=?'

}
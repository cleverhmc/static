const siteAuthHtml=`<div class="breadcrumbs">
    <ul class="breadcrumb">
        <li>
            <i class="ace-icon fa fa-home home-icon"></i>
            <a href="/erp">Home</a>
        </li>
        <li class="active">授权店铺管理
            <!-- <a href="//www.mangoerp.com/ap-oa/public/help/article/3" target="_blank" tooltip="查看帮助文档">
                <i class="fa fa-question-circle" style="color: #07d;"></i>
            </a> -->
             <a href="https://support.mangoerp.com" target="_blank" tooltip="查看帮助文档">
                <i class="fa fa-question-circle" style="color: #07d;"></i>
            </a>
        </li>
    </ul>
</div>
<div class="container-fluid" ng-controller="rootCtrl as vm">
    <div class="alert alert-warning alert-mini" ng-hide="vm.alertShow">
        <button type="button" class="close" ng-click="vm.alertShow=1">&times;</button>
        <strong>温馨提示：</strong> 一个芒果店长账号可以管理多个店铺，但一个店铺不能同时绑定多个芒果店长账号。 </div>
    <div class="mui-container" ng-if="vm.isShow">
        <mg-scrollfix padding="20">
            <div class="clearfix mui-scrollfix">
                <div class="pull-right clearfix">
                        <div class="pull-left mar-r-10">
                            <a class="btn btn-default btn-sm" style="position: relative;" ng-click="vm.authMark()">批量备注</a>
                        </div>
                    <div class="pull-left mar-r-10">
                        <a class="btn btn-default btn-sm" style="position: relative;padding-left: 21px;" ng-click="vm.authSort()"><i class="mg-icon mg-icon-dingbushezhi fa-fw" style="position: absolute;left: 1px;top: 2px;"></i>店铺排序</a>
                    </div>
                    <div ng-if="vm.site == 'shopeev2'" class="select-fix pull-left mar-r-3">
                        授权状态：
                        <select ng-model="vm.authorization" class="auth-site" ng-change="vm.setTpl()">
                            <option value="">全部</option>
                            <option value="ENABLE">正常</option>
                            <option value="DISABLE">失效</option>
                        </select>
                    </div>
                    <div ng-if="vm.site == 'ae'||vm.site == 'wish'||vm.site =='ebay'||vm.site =='dh'||vm.site =='jd'||vm.site =='shopee'||vm.site =='shopify'||vm.site =='ali1688'||vm.site =='joom'
                    ||vm.site =='fm'||vm.site =='ezbuy'||vm.site =='walmart'||vm.site =='wc'||vm.site =='shopyy'||vm.site =='vova'||vm.site =='kilimall'||vm.site =='mymall'||vm.site =='meesho'||vm.site =='MOshop'
                    ||vm.site =='JDThailand'||vm.site =='allegro'||vm.site =='taobaoTw'||vm.site =='ml'||vm.site =='Tiktok'|| vm.site=='TikTok'" class="select-fix pull-left mar-r-3">
                        授权状态：
                        <select ng-model="vm.authorization" class="auth-site" ng-change="vm.setTpl()">
                            <option value="">全部</option>
                            <option value="n">已授权</option>
                            <option value="y">已过期</option>
                        </select>
                    </div>
                    <div class="select-fix pull-left mar-r-3">
                        平台选择：
                        <select ng-model="vm.site" class="auth-site">

                                <option value="ae">AliExpress</option>


                                <option value="wish">Wish</option>


                                <option value="amazon">Amazon</option>


                                <option value="lazada">Lazada</option>


                                <option value="ebay">Ebay</option>


                                <option value="paypal">PayPal</option>


                                <option value="dh">敦煌</option>


                                <option value="jd">京东国际</option>


                                <option value="cd">Cdiscount</option>


                                <option value="shopee">Shopee</option>


                                <option value="shopeev2">Shopee2.0</option>

                            <option value="shopyy">Shopyy</option>

                                <option value="shopify">Shopify</option>


                                <option value="kikuu">KIKUU</option>


                                <option value="magento">Magento</option>


                                <option value="tophatter">tophatter</option>


                                <option value="ali1688">ali1688</option>

                            <!--  权限控制请后端自己添加-->
                            <option value="joom">joom</option>

                                <option value="fm">factorymarket</option>


                                <option value="ezbuy">ezbuy</option>

                            <option value="walmart">Walmart</option>
                            <option value="wc">Woocommerce</option>
                            <option value="vova">Vova</option>
                            <option value="kilimall">Kilimall</option>
                            <option value="mymall">myMall</option>
                            <option value="meesho">Meesho</option>
                            <option value="MOshop">富通天下自建站</option>
                            <option value="allegro">allegro</option>
                            <option value="taobaoTw">淘宝台湾</option>
                            <option value="JDThailand">JDThailand</option>
                            <option value="ml">Mercadolibre</option>
                            <option value="NewEgg">NewEgg</option>
                            <option value="Thisshop">Thisshop</option>
                            <option value="Coupang">Coupang</option>
                            <option value="Ozon">Ozon</option>
                            <option value="TikTok">TikTok</option>
                            <option value="Fanno">Fanno</option>
                            <option value="other">自定义</option>
                        </select>
                    </div>
                    <div class="input-group input-group-sm pull-left w200">
                        <input ng-model="vm.key" type="text" class="form-control" placeholder="请输入店铺" />
                        <span class="input-group-btn">
                            <button class="btn btn-default" ng-show="vm.key" ng-click="vm.reset()"><i
                                    class="fa fa-times"></i></button>
                            <button class="btn btn-default" ng-click="vm.search()"><i class="fa fa-search"></i></button>
                        </span>
                    </div>
                </div>
                <div class="pull-left">
                    <a class="btn btn-success btn-sm" ng-click="vm.add()">
                        <i class="fa fa-plus"></i> 增加<span class="text-danger">{{vm.siteCN}}</span>授权店铺</a>
                    <a class="btn btn-success btn-sm" ng-click="vm.add('walmartnew')" ng-if="vm.site==='walmart'">
                        <i class="fa fa-plus"></i> 增加新版<span class="text-danger">{{vm.siteCN}}</span>授权店铺</a>
                    <a class="btn btn-success btn-sm" ng-click="vm.addPayPal()" ng-if="vm.site==='paypal'">
                        <i class="fa fa-plus"></i> 增加<span class="text-danger">PayPal</span>授权注册</a>
                    <a ng-show="vm.viplimit && vm.site !== 'MOshop'" class="btn btn-primary btn-sm"
                        ng-click="vm.vipExtend()">
                        <i class="fa fa-plus"></i> 单独购买店铺</a>
                    <a ng-show="vm.viplimit && vm.site == 'shopee'" class="btn btn-primary btn-sm" target="_blank" href="/erp/#/erp/oauth/siteAuth/shopeev2">shopee2.0</a>

                    <div class="text-warning pull-left pad-t-5" ng-show="vm.site !== 'MOshop'">
                        <span ng-if="vm.viplimit.limit==='limit'" class="green">
                            {{vm.viplimit.pointName}}最多
                            <strong
                                class="{{vm.viplimit.over ? 'red' : 'green'}}">{{vm.viplimit.limitNum}}{{vm.viplimit.addNum?'+'+vm.viplimit.addNum:''}}</strong>{{vm.viplimit.limitNumUnit}}，已有
                            <strong
                                class="{{vm.viplimit.over ? 'red' : 'green'}}">{{vm.viplimit.count}}</strong>{{vm.viplimit.limitNumUnit}}
                            <strong ng-if="vm.viplimit.over" class="red bigger-120">，请清理多余的店铺或<a ng-click="vm.govip()"
                                    href="javascript:void(0);">升级VIP</a>。</strong>
                        </span>
                        <a ng-show="vm.helpUrl && vm.site !== 'MOshop'" href="{{vm.helpUrl}}" target="_blank">查看帮助文档</a>
                    </div>
                </div>
            </div>
        </mg-scrollfix>
        <!-- 列表 -->
        <mg-box ng-model="vm.page.box">
            <!-- ae -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='ae'">
                <thead>
                    <tr>
                        <th width="60" class="align-center">
                            <input type="checkbox" ng-model="vm.checkAll" />
                        </th>

                        <th>授权时间</th>
                        <th>账号</th>
                        <th>店铺别名</th>
                        <th>默认进入店铺</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.resourceOwner}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.defaultBinding=='y'" class="label label-success">是</span>
                            <span ng-if="item.defaultBinding=='n'">否</span>
                        </td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update(item.id)">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <!-- <a class="btn btn-primary btn-white btn-xs"  href="javascript:void(0);" mwl-confirm
                                            message="确认删除？"
                                            placement="left"
                                            on-confirm="vm.remove(item,$event)"
                                            on-cancel="cancelClicked = true">
                                                    <i class="fa fa-trash-o"></i>删除
                                                </a> -->
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- wish -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='wish'">
                <thead>
                    <tr>
                        <th width="60" class="align-center">
                            <input type="checkbox" ng-model="vm.checkAll" />
                        </th>

                        <th>店铺名称</th>
                        <th>商户 ID</th>
                        <th>币种</th>
                        <th>授权时间</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>{{item.currency||'CNY'}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs"
                                    ng-click="vm.update('562066da24168c11c38b3fb9')">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- amazon -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='amazon'">
                <thead>
                    <tr>
                        <th width="60" class="align-center">
                            <input type="checkbox" ng-model="vm.checkAll" />
                        </th>

                        <th>店铺名称</th>
                        <th>MerchantId</th>
                        <th>亚马逊站点</th>
                        <th>授权时间</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>{{item.site}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update(item,'amazonAddSite')"
                                    ng-if="item.refreshToken&&(item.siteShort==='UK'||item.siteShort==='FR'||item.siteShort==='DE'||item.siteShort==='IT'||item.siteShort==='ES'||item.siteShort==='US'||item.siteShort==='CA'||item.siteShort==='MX'||item.siteShort==='IN')">添加站点</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update(item)"
                                    ng-if="item.status=='已授权'"><i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.updateAmazonExtra(item)"
                                    ng-if="vm.site=='amazon'"><i class="fa fa-pencil-square-o"></i>其他</a>
                                <!-- <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update(item)"
                                    ng-if="!item.refreshToken">重新授权</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a> -->
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- lazada -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='lazada'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺名称</th>
                        <th>Seller ID</th>
                        <th>Email</th>
                        <th>币种</th>
                        <th>授权时间</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>{{item.resourceOwner}}</td>
                        <td mui-table-td>{{item.currency||'CNY'}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>

                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update(item.id)">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- ebay -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='ebay'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺名称</th>
                        <th>ebay账号</th>
                        <th>授权时间</th>
                        <th>到期时间</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.refreshTokenTimeout | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update()">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- paypal -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='paypal'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>PayPal账号</th>
                        <th>PayPal地址作为ebay买家地址</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>
                            <span ng-if="item.paypayAddressOn=='y'" class="label label-success">是</span>
                            <span ng-if="!item.paypayAddressOn">否</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- 敦煌 -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='dh'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺名称</th>
                        <th>店铺 ID</th>
                        <th>授权时间</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update()">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- 京东国际 -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='jd'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺名称</th>
                        <th>店铺 ID</th>
                        <th>授权时间</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update()">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- cdiscount -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='cd'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺名称</th>
                        <th>api名称</th>
                        <th>授权时间</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.appKey}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- shopee -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='shopee'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺名称</th>
                        <th>店铺id</th>
                        <th>授权时间</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="400">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.getsub(item)" ng-if="!item.isSIP">
                                    获取sip店铺
                                </a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update()">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- shopee2.0 -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='shopeev2'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺名称</th>
                        <th>店铺别名</th>
                        <th>店铺id</th>
                        <th>所属商户id</th>
                        <th>店铺类型</th>
                        <th>店铺站点</th>
                        <th>线上状态</th>
                        <th>跨境店铺</th>
                        <th>CNSC店铺</th>
                        <th>SIP店铺</th>
                        <th>授权时间</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="400">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.name}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>{{item.merchantId}}</td>
                        <td mui-table-td>{{item.sellerType}}</td>
                        <td mui-table-td>{{item.region}}</td>
                        <td mui-table-td>
                            <span ng-if="item.onlineStatus=='NORMAL'">正常</span>
                            <span ng-if="item.onlineStatus=='FROZEN'">冻结</span>
                            <span ng-if="item.onlineStatus=='BANNED'">违规</span>
                        </td>
                        <td mui-table-td>
                            <span ng-if="item.cbShop===0">否</span>
                            <span ng-if="item.cbShop===1">是</span>
                        </td>
                        <td mui-table-td>
                            <span ng-if="item.cnscShop===0">否</span>
                            <span ng-if="item.cnscShop===1">是</span>
                        </td>
                        <td mui-table-td>
                            <span ng-if="item.sip===0">否</span>
                            <span ng-if="item.sip===1">是</span>
                        </td>
                        <td mui-table-td>{{item.authTime | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.status}}</td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <!-- <a class="btn btn-primary btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.getshopeev2Sub(item)" ng-if="item.sellerType != '商户'">
                                    获取sip店铺
                                </a> -->
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='正常'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update()">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- shopify -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='shopify'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺名称</th>
                        <th>store name</th>
                        <th>授权状态</th>
                        <th>授权时间</th>
                        <th>更新时间</th>
                        <th>币种</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.gmtModified | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.currency}}</td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update($event, item.id)">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- kikuu -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='kikuu'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺别名</th>
                        <th>店铺 Id</th>
                        <th>accessToken</th>
                        <th>授权时间</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>{{item.refreshToken}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- Magento -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='magento'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺名称</th>
                        <th>Consumer Key</th>
                        <th>站点信息</th>
                        <th>版本</th>
                        <th>授权时间</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.appKey}}</td>
                        <td mui-table-td>{{item.resourceOwner}}</td>
                        <td mui-table-td>
                            <span ng-if="item.version=='v1'">magento 1.x</span>
                            <span ng-if="item.version=='v2'">magento 2.x</span>
                        </td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- tophatter -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='tophatter'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺别名</th>
                        <th>Seller ID</th>
                        <th>accessToken</th>
                        <th>授权时间</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>{{item.accessToken}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- ali1688 -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='ali1688'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>店铺id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.resourceOwner}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update()">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- Joom -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='joom'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>店铺id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.id}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update(item)">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- factoryMarket -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='fm'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>店铺id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.id}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update()">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- ezbuy -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='ezbuy'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>店铺id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.id}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- walmart -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='walmart'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>Consumer id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.resourceOwner}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- wc -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='wc'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>店铺id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.id}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- shopyy -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='shopyy'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>店铺id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.id}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- vova -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='vova'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>店铺id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.id}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- kilimall -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='kilimall'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>店铺id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.id}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update(item)">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- mymall -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='mymall'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>店铺id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.id}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update(item)">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- meesho -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='meesho'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>店铺id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.id}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update(item)">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- MOshop -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='MOshop'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>店铺id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.id}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)" ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);" ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- JDThailand -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list" ng-show="vm.site=='JDThailand'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>店铺id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.id}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div class="mar-b-10">
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update()">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.syncStore(item)">
                                    <i class="fa fa-download"></i>同步仓库</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.syncCategory(item)">
                                    <i class="fa fa-download"></i>同步类目</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- allegro -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list" ng-show="vm.site=='allegro'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺名称</th>
                        <th>商户 ID</th>
                        <th>币种</th>
                        <th>授权时间</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>{{item.currency||'CNY'}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <!-- <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)" ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a> -->
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update('77a2ab2df5a945449df9d02694956641')">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);" ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- taobaoTw -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='taobaoTw'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>授权时间</th>
                        <th>店铺id</th>
                        <th>店铺名称</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>{{item.id}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update()">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
             <!-- allegro -->
             <table class="table table-striped table-hover table-bordered table-sticky goods-list" ng-show="vm.site=='ml'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺名称</th>
                        <th>店铺别名 <span class="th-tooltip"><i class="fa fa-exclamation-circle" tooltip="填写店铺别名后，将用于芒果店长中展示，不修改后台名称" tooltip-placement="bottom"></i></span>
                        </th>
                        <th>商户 ID</th>
                        <th>币种</th>
                        <th>授权时间</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>
                            {{item.name}}
                        </td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>{{item.currency||'CNY'}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <!-- <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)" ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a> -->
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update('77a2ab2df5a945449df9d02694956641')">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);" ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.editOperate(item,$event)">
                                    <i class="fa fa-pencil-square-o"></i>
                                    编辑
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- newEgg新蛋 -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='NewEgg'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺别名</th>
                        <th>授权时间</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- Thisshop -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='Thisshop'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺别名</th>
                        <th>授权时间</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Coupang -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='Coupang'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺别名</th>
                        <th>授权时间</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

             <!-- Ozon -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='Ozon'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺别名</th>
                        <th>授权时间</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Tiktok -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='TikTok' || vm.site=='Tiktok'">
                <thead>
                    <tr>
                        <th width="60" class="align-center">
                            <input type="checkbox" ng-model="vm.checkAll" />
                        </th>

                        <th>店铺名称</th>
                        <th>店铺id</th>
                        <th>授权时间</th>
                        <th>授权状态</th>
                        <th>备注</th>
                        <th width="400">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.sellerId}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                            <span ng-if="item.status=='已失效'">已失效</span>
                            <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                        </td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <!-- <a class="btn btn-primary btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.getsub(item)" ng-if="!item.isSIP">
                                    获取sip店铺
                                </a> -->
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                    <i class="fa fa-search"></i>检测</a>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update()">
                                    <i class="fa fa-download"></i>更新授权</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

             <!-- Fanno -->
             <table class="table table-striped table-hover table-bordered table-sticky goods-list"
             ng-show="vm.site=='Fanno'">
             <thead>
                 <tr>
                     <th width="60" class="align-center">序号</th>
                     <th>店铺名称</th>
                     <th>店铺id</th>
                     <th>授权时间</th>
                     <th>授权状态</th>
                     <th>备注</th>
                     <th width="400">操作</th>
                 </tr>
             </thead>
             <tbody>
                 <tr ng-repeat="item in vm.page.list track by item._id">
                     <td class="align-center">{{$index + 1}}</td>
                     <td>{{item.alias}}</td>
                     <td>{{item.sellerId}}</td>
                     <td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                     <td>
                         <span ng-if="item.status=='已失效'">已失效</span>
                         <span ng-if="item.status=='已授权'" class="label label-success">已授权</span>
                     </td>
                     <td>
                       <div class="auth-ellipsis" tooltip="{{item.remark}}">
                         {{item.remark}}
                       </div>
                     </td>
                     <td>
                         <div>
                             <!-- <a class="btn btn-primary btn-white btn-xs" href="javascript:void(0);"
                                 ng-click="vm.getsub(item)" ng-if="!item.isSIP">
                                 获取sip店铺
                             </a> -->
                             <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item)"
                                 ng-if="item.status=='已授权'">
                                 <i class="fa fa-pencil-square-o"></i>编辑</a>
                             <a class="btn btn-primary btn-white btn-xs" ng-click="vm.check($event, item.id)">
                                 <i class="fa fa-search"></i>检测</a>
                             <a class="btn btn-primary btn-white btn-xs" ng-click="vm.update()">
                                 <i class="fa fa-download"></i>更新授权</a>
                             <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                 ng-click="vm.remove(item, $event)">
                                 <i class="fa fa-trash-o"></i>删除
                             </a>
                         </div>
                     </td>
                 </tr>
             </tbody>
         </table>

            <!-- 自定义 -->
            <table class="table table-striped table-hover table-bordered table-sticky goods-list"
                ng-show="vm.site=='other'">
                <thead>
                    <tr>
                            <th width="60" class="align-center">
                                    <input type="checkbox" ng-model="vm.checkAll" />
                                </th>

                        <th>店铺别名</th>
                        <th>授权时间</th>
                        <th>备注</th>
                        <th width="300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in vm.page.list track by item._id"   mui-table-tr="item" checkbox="true" success-mask="false" success-close="true">

                        <td mui-table-td class="align-center">{{$index + 1}}</td>
                        <td mui-table-td>{{item.alias}}</td>
                        <td mui-table-td>{{item.authorizedDate | date:'yyyy-MM-dd HH:mm:ss'}}</td>
                        <td mui-table-td>
                          <div class="auth-ellipsis" tooltip="{{item.remark}}">
                            {{item.remark}}
                          </div>
                        </td>
                        <td mui-table-td>
                            <div>
                                <a class="btn btn-primary btn-white btn-xs" ng-click="vm.edit(item,$event)"
                                    ng-if="item.status=='已授权'">
                                    <i class="fa fa-pencil-square-o"></i>编辑</a>
                                <a class="btn btn-danger btn-white btn-xs" href="javascript:void(0);"
                                    ng-click="vm.remove(item,$event)">
                                    <i class="fa fa-trash-o"></i>删除
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="page-sticky clearfix" ng-show="vm.page.list.length">
                <div class="pull-right">
                    <pagination total-items="vm.page.totalItems" ng-model="vm.page.current" max-size="6"
                        items-links="true" go-links="true" ng-change="vm.page.request()"
                        items-per-page-change="vm.page.setPageSize(pageSize)"></pagination>
                </div>
            </div>
        </mg-box>
        <div class="alert alert-warning" ng-show="vm.page.list.length == 0">
            <i class="fa fa-fw fa-warning"></i>
            暂无相关数据
        </div>
        <div ng-if="false" class="hotel-rooms">

                <div ng-if="vm.site=='wish'">
                    <h3>授权教程</h3>
                    <div uib-carousel>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/wish1.png" style="margin:auto;" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/wish2.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/wish3.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/wish4.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/wish5.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/wish6.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/wish7.png" />
                        </div>
                    </div>
                </div>
                <div ng-if="vm.site=='ae'">
                    <h3>授权教程</h3>
                    <div uib-carousel>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/ae1.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/ae2.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/ae3.png" />
                        </div>
                    </div>
                </div>
                <div ng-if="vm.site=='lazada'">
                    <h3>授权教程</h3>
                    <p>授权不同站点，需要登录相应网站获取授权信息，下面教程以马来西亚站为例，其它站点类似。</p>
                    <table class="table table-striped table-hover table-bordered table-sticky">
                        <thead>
                            <tr>
                                <th>站点</th>
                                <th>网站</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td mui-table-td>马亚西亚</td>
                                <td mui-table-td>
                                    <a href="https://sellercenter.lazada.com.my"
                                        target="_blank">https://sellercenter.lazada.com.my</a>
                                </td>
                            </tr>
                            <tr>
                                <td mui-table-td>泰国</td>
                                <td mui-table-td>
                                    <a href="https://sellercenter.lazada.co.th"
                                        target="_blank">https://sellercenter.lazada.co.th</a>
                                </td>
                            </tr>
                            <tr>
                                <td mui-table-td>越南</td>
                                <td mui-table-td>
                                    <a href="https://sellercenter.lazada.vn"
                                        target="_blank">https://sellercenter.lazada.vn</a>
                                </td>
                            </tr>
                            <tr>
                                <td mui-table-td>印尼</td>
                                <td mui-table-td>
                                    <a href="https://sellercenter.lazada.co.id"
                                        target="_blank">https://sellercenter.lazada.co.id</a>
                                </td>
                            </tr>
                            <tr>
                                <td mui-table-td>菲律宾</td>
                                <td mui-table-td>
                                    <a href="https://sellercenter.lazada.com.ph"
                                        target="_blank">https://sellercenter.lazada.com.ph</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div uib-carousel>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/lazada1.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/lazada2.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/lazada3.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/lazada4.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/lazada5.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/lazada6.png" />
                        </div>
                    </div>
                </div>
                <div ng-if="vm.site=='amazon'">
                    <h3>授权教程</h3>
                    <p>授权不同站点，需要登录相应开发网站获取授权信息，下面教程以美国站为例，其它站点类似。</p>
                    <table class="table table-striped table-hover table-bordered table-sticky">
                        <thead>
                            <tr>
                                <th>站点</th>
                                <th>开发网站</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td mui-table-td>美国站</td>
                                <td mui-table-td>
                                    <a href="https://developer.amazonservices.com"
                                        target="_blank">https://developer.amazonservices.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td mui-table-td>英国站</td>
                                <td mui-table-td>
                                    <a href="https://developer.amazonservices.co.uk"
                                        target="_blank">https://developer.amazonservices.co.uk</a>
                                </td>
                            </tr>
                            <tr>
                                <td mui-table-td>德国站</td>
                                <td mui-table-td>
                                    <a href="https://developer.amazonservices.de"
                                        target="_blank">https://developer.amazonservices.de</a>
                                </td>
                            </tr>
                            <tr>
                                <td mui-table-td>法国站</td>
                                <td mui-table-td>
                                    <a href="https://developer.amazonservices.fr"
                                        target="_blank">https://developer.amazonservices.fr</a>
                                </td>
                            </tr>
                            <tr>
                                <td mui-table-td>日本站</td>
                                <td mui-table-td>
                                    <a href="https://developer.amazonservices.jp"
                                        target="_blank">https://developer.amazonservices.jp</a>
                                </td>
                            </tr>
                            <tr>
                                <td mui-table-td>意大利站</td>
                                <td mui-table-td>
                                    <a href="https://developer.amazonservices.it"
                                        target="_blank">https://developer.amazonservices.it</a>
                                </td>
                            </tr>
                            <tr>
                                <td mui-table-td>西班牙站</td>
                                <td mui-table-td>
                                    <a href="https://developer.amazonservices.es"
                                        target="_blank">https://developer.amazonservices.es</a>
                                </td>
                            </tr>
                            <tr>
                                <td mui-table-td>加拿大站</td>
                                <td mui-table-td>
                                    <a href="https://developer.amazonservices.ca"
                                        target="_blank">https://developer.amazonservices.ca</a>
                                </td>
                            </tr>
                            <tr>
                                <td mui-table-td>墨西哥站</td>
                                <td mui-table-td>
                                    <a href="https://developer.amazonservices.com.mx"
                                        target="_blank">https://developer.amazonservices.com.mx</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div uib-carousel>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/amazon1.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/amazon2.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/amazon3.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/amazon4.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/amazon5.png" />
                        </div>
                    </div>
                </div>
                <div ng-if="vm.site=='ebay'">
                    <h3>授权教程</h3>
                    <div uib-carousel>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/ebay1.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/ebay2.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/ebay3.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/ebay4.png" />
                        </div>
                    </div>
                </div>
                <div ng-if="vm.site=='dh'">
                    <h3>授权教程</h3>
                    <div uib-carousel>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/dh1.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/dh2.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/dh3.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/dh4.png" />
                        </div>
                        <div uib-slide>
                            <img src="//asset.mangoerp.com/img/study/auth/dh5.png" />
                        </div>
                    </div>
                </div>

        </div>
    </div>
</div>`

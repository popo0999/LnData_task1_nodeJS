說明文件如下：

PORT 為 9988(http://localhost:9988)

1. 員工列表：http://localhost:9988/staffs

   傳入以下參數進行員工的排序以及分頁功能
   參數 | 選項 | 說明 | 預設值 |
   -------|-------|-------|-------|
   sortColumn| staffNo、staffName、gender、birthday、deptId、deptName、status、salary| 哪個欄位排序 | staffNo |
   order| asc、desc| 順序排序(降冪、升冪) | asc |
   pageCount| (int)| 一頁資料筆數 | 5 |
   pageNumber| (int) | 第幾頁 | 1 |

2. 員工所屬部門的資料:http://localhost:9988/dept?staffNo=X

   傳入的員工編號會回傳該員工所屬部門的資料

安裝套件：
用途 |安裝套件 |
-------|-------|
連接資料庫| mysql2 |
自動化 reload | nodemon |

# LnData Web Engineer Pre-Test

## Task1

請嘗試實作 rest api project， 說明如下：

1. 請在本機(local)的 MySQL 新建一個資料庫名為「company」，資料庫編碼為 utf-8，並將 company.sql 內的資料及 table 匯入資料庫中。
2. 以 node.js 搭配 express 實作 rest api project，連接 MySQL 內的 company 資料庫取得資料，api port 設定為 9988，回傳格式為 JSON。
3. project 內有兩支 API，需求說明如下：

### 1. [GET] http://localhost:9988/staffs (回傳 staff list)

     可傳入以下參數進行分頁及排序功能，未傳入參數則設定為預設值：
     + sortColumn -> 以哪個欄位排序 (order by，預設值staffNo)
     + order 		 ->  排序的順序 (asc or desc，預設值asc)
     + pageCount  ->  回傳資料筆數 (預設值5)
     + pageNumber ->  資料是第幾頁 (預設值1)(假設pageCount=5，pageNumber=1則回傳資料為第1-5筆)

```
範例：http://localhost:9988/staffs?sortColumn=salary&order=desc&pageCount=3&pageNumber=1
回傳結果：
[
	    {
	        "staffNo": 7,
	        "staffName": "Neil",
	        "gender": "M",
	        "birthday": "1991-09-04",
	        "deptId": "A",
	        "deptName": "業務發展部",
	        "status": 1,
	        "salary": 60000
	    },
	    {
	        "staffNo": 8,
	        "staffName": "Peter",
	        "gender": "M",
	        "birthday": "2001-02-04",
	        "deptId": "B",
	        "deptName": "數據科學部",
	        "status": 1,
	        "salary": 55000
	    },
	    	    {
	        "staffNo": 12,
	        "staffName": "Johnson",
	        "gender": "M",
	        "birthday": "1978-08-08",
	        "deptId": "B",
	        "deptName": "數據科學部",
	        "status": 1,
	        "salary": 53000
	    }
	]

```

### 2. [GET] http://localhost:9988/dept?staffNo=X(依傳入的員工編號回傳該員工所屬部門的資料)

```
範例：http://localhost:9988/dept?staffNo=1
回傳結果：
	    {
	        "id": "A",
	        "name": "業務發展部",
	        "location": "四樓"
	    }
```

### 注意事項：

1. Task1 請以 Node.js + express + ES6 完成，Task2 請以 React.js + ES6 完成
2. 不限制使用的函式庫及程式編寫方式
3. 程式需可執行，並提供簡單的程式說明及架設文件

---

$(function () {
    var data = {
      type1: {
        length: 3,
        name: '可测量类成绩',
        id: 1
      },
      type2: {
        length: 2,
        name: '技评类成绩',
        id: 2
      },
      type3: {
        length: 1,
        name: '特色项目',
        id: 3
      },
      type4: {
        name: '理论成绩',
        length: 1,
        id: 4
      },
      type5: {
        name: '考勤综合评价类',
        length: 1,
        id: 5
      },
    };


    //定义表头的构造函数
    function MakeTable(obj, dataList) {
      var self = this;
      this.tableWrapper = obj;
      this.data = dataList;
      this.init = function () {
        self.makeNameArr();
        self.makeTableHead();
      }
    }

    //定义表头构造函数的原型方法
    MakeTable.prototype.makeNameArr = function () {
      var typeNameArr = [];
      for (var key in this.data) {
        typeNameArr.push(data[key].id);
      }
      this.typeNameArr = typeNameArr;
    };
    MakeTable.prototype._isRowspan = function () {
      for (var key in this.data) {
        if (this.data[key].id != 4 || this.data[key].id != 5) {
          return true;
        } else {
          return false;
        }
      }
    };
    MakeTable.prototype.makeTableHead = function () {
      this.table = $('<table class="t_c" border="0" cellspacing="0" cellpadding="0" style="width: 100%"><thead></thead></table>');
      this.firstRow();
    }
    MakeTable.prototype.firstRow = function () {
      var tdNode = $('<tr></tr>');
      if (this._isRowspan()) {
        tdNode.append('<td rowspan="2"></td>')
      } else {
        tdNode.append('<td style="width: 100px"></td>')
      }
      for (var key in this.data) {
        if (this.data[key].id == 1) {
          var nowHeaderTd = $('<td colspan="' + this.data[key].length * 2 + '">' + this.data[key].name + '</td>');
          tdNode.append(nowHeaderTd);
        } else if (this.data[key].id == 2) {
          var nowHeaderTd = $('<td colspan="' + this.data[key].length * 2 + '">' + this.data[key].name + '</td>');
          tdNode.append(nowHeaderTd);
        } else if (this.data[key].id == 3) {
          var nowHeaderTd = $('<td colspan="' + this.data[key].length + '">' + this.data[key].name + '</td>');
          tdNode.append(nowHeaderTd);
        } else if (this.data[key].id == 4) {
          if (this._isRowspan()) {
            var nowHeaderTd = $('<td rowspan="2">' + data[key].name + '</td>');
          } else {
            var nowHeaderTd = $('<td>' + data[key].name + '</td>');
          }
          tdNode.append(nowHeaderTd);
        } else if (this.data[key].id == 5) {
          if (this._isRowspan()) {
            var nowHeaderTd = $('<td rowspan="2">' + data[key].name + '</td>');
          } else {
            var nowHeaderTd = $('<td>' + data[key].name + '</td>');
          }
          tdNode.append(nowHeaderTd);
        }

      }
      if (this._isRowspan()) {
        tdNode.append('<td rowspan="3">总分</td><td rowspan="3">等级</td>')
      } else {
        tdNode.append('<td rowspan="2">总分</td><td rowspan="2">等级</td>')
      }
      this.table.find(">thead").append(tdNode);
      this.secondRow();
    }
    MakeTable.prototype.secondRow = function () {
      var secondRow = $('<tr></tr>');
      for (var key in this.data) {
        if (this.data[key].id == 1) {
          for (var i = 0; i < this.data[key].length; i++) {
            secondRow.append('<td colspan="2">项目' + (i + 1) + '</td>');
          }
        } else if (this.data[key].id == 2) {
          for (var i = 0; i < this.data[key].length; i++) {
            secondRow.append('<td colspan="2">项目' + (i + 1) + '</td>');
          }
        } else if (this.data[key].id == 3) {
          for (var i = 0; i < this.data[key].length; i++) {
            secondRow.append('<td>项目' + (i + 1) + '</td>');
          }
        } else if (this.data[key].id == 4) {
          if (!this._isRowspan()) {
            this.specialRow();
            return false;
          }
        } else if (this.data[key].id == 5) {
          if (!this._isRowspan()) {
            this.specialRow();
            return false;
          }
        }
      }
      this.table.find("thead").append(secondRow);
      this.tableWrapper.append(this.table);
      if (this._isRowspan()) {
        this.thirdRow();
      }
    }
    MakeTable.prototype.thirdRow = function () {
      var thirdRow = $('<tr><td>姓名</td></tr>');
      for (var key in this.data) {
        if (this.data[key].id == 1) {
          for (var i = 0; i < this.data[key].length; i++) {
            thirdRow.append('<td>成绩</td><td>得分</td>');
          }
        } else if (this.data[key].id == 2) {
          for (var i = 0; i < this.data[key].length; i++) {
            thirdRow.append('<td>等级</td><td>得分</td>');
          }
        } else if (this.data[key].id == 3) {
          for (var i = 0; i < this.data[key].length; i++) {
            thirdRow.append('<td>得分</td>');
          }
        } else if (this.data[key].id == 4) {
          thirdRow.append('<td>得分</td>');
        } else if (this.data[key].id == 5) {
          thirdRow.append('<td>得分</td>');
        }
      }
      this.table.find("thead").append(thirdRow);

    }
    MakeTable.prototype.specialRow = function () {
      var specialSecondRow = $('<tr><td>姓名</td></tr>')
      specialSecondRow.append('<td>得分</td>');
      this.table.find(">thead").append(specialSecondRow);
      this.tableWrapper.append(this.table);
    }
    MakeTable.prototype.addTbody = function (html) {
      this.tableWrapper.find(">table").append(html);
    }
    //调用构造函数，创建表头
    var makeTable = new MakeTable($(".table-wrapper"), data);
    makeTable.init();
    var tbody=$('<tbody></tbody>')
    var tbodyTd=$('<tr>' +
      '<td>小明</td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '<td><input type="number"></td>' +
      '</tr>')
    tbody.append(tbodyTd);
    makeTable.addTbody(tbody);
  }
)
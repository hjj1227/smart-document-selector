<template>
  <div class="container">
        <!-- 搜索栏 -->
        <div class="row">
            <label class="input-group-text" for="keyWords">文件名</label>
            <input id="keyWords" type="text" placeholder="请输入文件名（支持模糊查询）" v-model.trim.lazy="keyWords">         
            <button id="searchNSD" class="btn btn-primary">搜索智慧文档</button>
        </div>
      
        <!-- 表格 -->
        <div class="row">
            <table class="table table-striped table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>文件名</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="totalNumber === 0">
                        <td>无数据</td>
                    </tr>
                    <tr v-for="file in files" :key="file.id">
                        <td :class="{'table-active':currentFile === file.filename}" style="text-align:left"  @dblclick="queryFile(currentFile)" @mouseover="selectNSD(file.filename)">
                            {{file.filename | removeSuffix}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 分页 -->
        <div class="pager" id="pager">
        </div>
  </div>
   
</template>

<script>
import axios from 'axios'

export default {
  name: 'About',
   data () {
    return {
      keyWords:"",
      files:[],
      totalNumber:"",
      totalPage:"",
      pageIndex:"",
      pageSize:"",
      currentFile:""
    }
  },
  methods:{
      getAllFileInfo(){
          axios.get('http://localhost:4040/filesInfo',{params:{pageIndex:'2',pageSize:'10',keyWord:'B'}}).then((res)=>{
              this.files = res.data.files
              this.totalNumber = res.data.totalNumber
              this.pageIndex =  res.data.pageIndex
              this.pageSize = res.data.pageSize
              let files =  res.data.files;
              this.currentFile = res.data.files[0].filename
              //let [this.files,this.totalNumber,this.pageIndex,this.pageSize] = [res.data.files,res.data.totalNumber, res.data.pageIndex,res.data.pageSize]
          }).catch((e)=>{
              console.log(e);
          })
      },
      gotoPage(pageIndex){
           axios.get('http://localhost:4040/filesInfo',{params:{pageIndex:pageIndex,pageSize:'10',keyWord:'B'}}).then((res)=>{
              console.log(res.data);
              this.files = res.data.files
              this.totalNumber = res.data.totalNumber
              this.pageIndex =  res.data.pageIndex
              this.pageSize = res.data.pageSize
              console.log(this.totalNumber);
          }).catch((e)=>{
              console.log(e);
          })
      },
      queryFile(curFile){
          axios.get('http://localhost:4040/queryFile',{params:{fileName:curFile}}).then((res)=>{
            console.log(res.data);
            this.$router.push({path:'/selectPage', query:{htmlStr:res.data}});
          }).catch((e)=>{

          })
      },
      selectNSD(file){
          this.currentFile = file 
      },
      getNSD(){
           console.log(this.currentFile === file.filename)
      },

      switchToPage(){
      }
  },
  filters:{
      removeSuffix(val){
          return val.replace(".nsd","");
      }
  },
  created(){
      this.getAllFileInfo();
  }

}
</script>

<style lang="css" scoped>
#keyWords{
    display: inline-block;
    width:85%
}
.table-active{
    background-color:lightgreen;
}

</style>

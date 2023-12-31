import styled from 'styled-components';

export const StAll=styled.div`
    width: 100%;
    float: right;
    position: relative;
margin-top: 4%;
display: flex;
justify-content:space-between;
/* width: 80%; */
    /* margin-top: 4%; */
    h2{
        margin:1% 0;
        font-size:24px;
    }
.shopper {
    
    display: flex;
    align-items: center;
    span{
    border:none;
    box-shadow: none;
    background: transparent;
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin:0 1%;
    svg{
        font-size:20px;
        margin-left:2%;
        /* fill: rgb(215, 57, 72); */
    }
    span{
    margin:0 5px;
}
}
@media (max-width:768px) {
    /* margin:2% 0; */
    display:none;
}
}
.ant-dropdown-trigger{
    background-color: transparent;
    padding: 2px 5px;
    border-radius: 10px;
    width:80px;
    span{
        display: flex;
        justify-content:space-between;
    color: #333;
    align-items: center;
    background: transparent;
    font-size:14px;
    /* font-weight:bold; */
    }
}
.ant-col{
    width:82%;
    padding:10px;
}
@media (max-width:768px){
    .ant-col{
        padding:0;
        padding-bottom: 10%;
    }
.shopper .ant-btn{
    display: none;
}
.ant-col{
    width:100%;
}
margin-top: 0;
    width: 100%;
    flex-direction: column;
    h2{
        display:none;
    }
    hr{
        display: none;
    }
}
`

export const StCardContainer=styled.div`
display: flex;
flex-wrap: wrap;
margin: 2px;
.infinite-scroll-component{
    display: flex;
    flex-wrap: wrap;
}
/* width: 91%; */
.ant-card{
    margin: 3px;
    padding: 12px;
    img{
        /* height: 181px; */
        width: 148px;
    }
    .ant-btn{
        border: 0;
        height: 16px;
        width: 16px;
    }
    svg{
        height: 16px;
        width: 16px;
        /* margin: 0 4px; */
        z-index:10;
    }
}
@media(max-width:768px){
    width:100%;
    justify-content:center;
    
.ant-card{
    /* width: auto; */
    margin: 2px;
    
    padding: 12px;
    background-color: white;
    border-radius: 8px;
    width: 100%;
    height: 416px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

    .ant-card-cover{
        height: 176px;
    text-align: center;
    display: block;
    vertical-align: middle;
    margin-bottom: 8px;
    position: relative;
    }
    .ant-card img{
        position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    object-fit: contain;
    color: transparent;
    }
}
@media (max-width:425px) {
    display: grid;
    gap: 8px;
    grid-template-columns: minmax(0,1fr)minmax(0,1fr);
    .ant-card{
        /* width: 46%; */
    }
}
`


export const StHeader=styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    align-items:center;
    border-bottom: 1px solid #ddd;
    padding: 1%;
@media(max-width:768px){
    display: none;
}

`
export const StMobileHeader=styled.div`
display:none;
justify-content:space-between;
width:100%;
align-items:center;
flex-direction:column;
/* padding-top:5%; */
.tags{
    display: flex;
justify-content:space-between;
width:100%;
align-items:center;
overflow-x:scroll;
flex-wrap:nowrap;
overflow-x:scroll;

.ant-btn{
    margin: 0 3%;
}
h3{
    font-weight:normal;
    font-size:14px;
    white-space:nowrap;
}
}
.mobileShoppers{
    display: flex;
width:100%;
align-items:center;
justify-content:flex-start;
flex-wrap:nowrap;
overflow-x:scroll;
.ant-btn{
    background: transparent;
    border: 0;
}
}
.dropdownFilter{
    
    display: flex;
width:100%;
align-items:center;
justify-content:flex-start;
background: #fff;
li{
    list-style:none;
    padding: 6px;
    margin: 0 3%;
}
.ant-btn{
    background: transparent;
    border: 0;
}
}
@media(max-width:768px){
    display: flex;
    background: #fff;
    .tags,.dropdownFilter{

        padding: 12px;
    }
    .tags{
        background: #f2f3f5;
    }
    .ant-input-group-wrapper{
        width:85%;
    }
    .ant-input,.ant-input-search-button,.ant-input-group-addon{
        /* margin-top:20px; */
        height: 40px;
        background: #f5f7fa;
        border:none;
    }
    .dropdownFilter{
        width:100%;
        overflow-x:scroll;
        .ant-btn{
            box-shadow:none;
            /* width:40%; */
        }
        button li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        svg{
            margin-left:5%;
        }
    }}
}
`


import React from "react";
import * as S from './styles';
import ChildSave1 from "../../../assets/ChildSave1.png"

const ChildSave = () => {
    return (
        <S.Wrapper>
            <S.ContentBox>
                <h1>1. 긴급 보호</h1>
                <ul>
                    <li>베이비박스는 부모의 피치 못할 사정이나 아이의 장애 등의 이유로 유기될 위험에 처한 아이를 구제해서 보호하는 일을 한다.</li>
                    <li>긴급 보호의 대상은 친부모가 양육을 포기하여 <b>출생신고를 하지 않은 아기들</b>이고, 베이비박스에서는 이 아이들을 <b>1~7일간 보호 한 후</b>에 다음 과정을 거친다.</li>
                    <img style={{width: '700px'}} src={ChildSave1} alt=""/>
                    <li>단, 주사랑공동체는 미혼모들의 양육 포기나 베이비박스에 아이를 놓고가는 행위를 <b>방임이나 조장하지 않는다.</b></li>
                    <li>베이비박스를 이용하려는 미혼모들과의 상담 등을 통해 <b>최대한 이들이 양육을 포기하지 않도록 노력</b>하고, 양육을 포기하더라도 <b>적절한 절차를 거쳐 입양</b>하도록 노력한다.</li>
                </ul>
                <h1>2. 영아 수탁 보호</h1>
                <ul>
                    <li>친부모가 아기를 양육하고자 하는 뜻은 있지만 <b>당장 양육할 형편이 되지 않는 경우</b>에는 <b>상담을 통해 아기를 수탁하여 보호</b>한다.</li>
                    <li>친부모가 출산 직후 힘든 상황에서 양육을 포기하지 않도록 1~6개월간 <b>단기적으로 24시간 보육 서비스를 제공</b>하는 것이다.</li>
                    <li>해당 아기들은 <b>출생신고</b>를 해야하며 <b>기간 내에 아기를 되찾아가야 한다.</b></li>
                </ul>
            </S.ContentBox>
        </S.Wrapper>
    )
}

export default ChildSave;
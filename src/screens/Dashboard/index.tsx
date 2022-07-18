import React from "react";
import { HighLightCard } from "../../components/HighLightCard";
            
import {Container, Header, UserWrapper, UserInfo, Photo, User, UserGreetings, UserName,Icon} from './styles'

export function Dashboard() {
    return(
        <Container >
         <Header>
            <UserWrapper>
                <UserInfo>
                    <Photo source={{uri: "https://media-exp1.licdn.com/dms/image/C4D03AQG5tXgxHIoaFQ/profile-displayphoto-shrink_400_400/0/1654144776007?e=1663200000&v=beta&t=qMDNaiKYGAYFwnk9u4XmsStDwwcWyK7bCd5XEiziyJs"}}/>
                    <User>
                        <UserGreetings>Olá,</UserGreetings>
                        <UserName>Lucas</UserName>
                    </User>
                </UserInfo>
                <Icon name="power"/>
            </UserWrapper>
         </Header> 
         <HighLightCard/>
        </Container>
    )
}


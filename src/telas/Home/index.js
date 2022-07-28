import React from "react";
import { View, Image } from "react-native";

import Topo from "./componentes/Topo";
import Produtores from "./componentes/Produtores";


export default function Home() {
    return  <View>
            <Produtores topo={Topo}/>
    </View>
}
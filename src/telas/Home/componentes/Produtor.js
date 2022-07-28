import React, { useReducer, useMemo } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Estrelas from '../../../componentes/Estrelas';

const distanciaEmMetros = (distancia) => {
    return `${distancia}m`
}

export default function Produtor({nome, imagem, distancia, estrelas}) {
    //const [selecionado, setSelecionado] = useState(false);
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false 
    );
    
    const distanciaString = useMemo(
        () => distanciaEmMetros(distancia),
        [distancia]
    );

    return <TouchableOpacity 
            style={estilos.card}  
            onPress={inverterSelecionado}>
        <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} /> 
        <View style={estilos.info}>
            <View>
                <Text style={estilos.nome}>{ nome }</Text>
                <Estrelas 
                    quantidade={estrelas}
                    editavel={selecionado}
                    grande={selecionado}
                />
            </View>
            <Text style={estilos.distancia}>{ distanciaString }</Text> 
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    card:{
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 4
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19
    }
})
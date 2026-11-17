type Props={
    identifier: string;
}
export function getImageUrl(props: Props){
    return{
        img: "https://wtvehiclesapi.duckdns.org/assets/images/"+props.identifier+".png",
        url: "https://wiki.warthunder.com/unit/"+props.identifier
    }
}
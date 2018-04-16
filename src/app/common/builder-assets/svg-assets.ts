import {ILayoutSvgElement} from '../services/data-manager.service';

export const svgElements:ILayoutSvgElement[] = [
{id:1,pos:{x:100,y:100},attrs:{'fill':'#ffffff'},name:'circle empty',url:'circle_empty.png',viewBox:'0 0 500 500',path:`M250,500.2c-66.8,0-129.7-26-176.9-73.3C25.8,379.7-0.2,316.8-0.2,250s26-129.7,73.3-176.9
	C120.3,25.8,183.2-0.2,250-0.2s129.7,26,176.9,73.3c47.3,47.3,73.3,110.1,73.3,176.9s-26,129.7-73.3,176.9
	C379.7,474.2,316.8,500.2,250,500.2z M250,14.8c-62.8,0-121.9,24.5-166.3,68.9S14.8,187.2,14.8,250s24.5,121.9,68.9,166.3
	s103.5,68.9,166.3,68.9s121.9-24.5,166.3-68.9s68.9-103.5,68.9-166.3s-24.5-121.9-68.9-166.3S312.8,14.8,250,14.8z`},
{id:2,pos:{x:100,y:100},attrs:{},name:'circle filled',url:'circle_filled.png',viewBox:'0 0 500 500',innerAssets:[
{pos:{},attrs:{'cx':'250','cy':'250','r':'250','fill':'rgb(127,127,127)'},element:'circle'},
{pos:{},attrs:{'fill':'#ffffff'},path:`M250,500.5c-66.9,0-129.8-26.1-177.1-73.4C25.6,379.8-0.5,316.9-0.5,250S25.6,120.2,72.9,72.9
	C120.2,25.6,183.1-0.5,250-0.5s129.8,26.1,177.1,73.4c47.3,47.3,73.4,110.2,73.4,177.1s-26.1,129.8-73.4,177.1
	C379.8,474.4,316.9,500.5,250,500.5z M250,14.5c-62.9,0-122,24.5-166.5,69C39,128,14.5,187.1,14.5,250s24.5,122,69,166.5
	c44.5,44.5,103.6,69,166.5,69s122-24.5,166.5-69c44.5-44.5,69-103.6,69-166.5s-24.5-122-69-166.5C372,39,312.9,14.5,250,14.5z`}
]}

];
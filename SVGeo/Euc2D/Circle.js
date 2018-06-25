import Model from '../../OvO/model/Model.js';
import Path from '../genaral/Path.js';

export default class Circle extends Path
{
	constructor( center, radius, options={}, )
	{
		super();
		
		this.center= center;
		this.radius= new Model( radius, );
		this.options= options;
	}
	
	crossLine( line, options={}, )
	{
		return line.crossCircle( this, options, );
	}
	
	get o()
	{
		return this.center;
	}
	
	get r()
	{
		return this.radius;
	}
}
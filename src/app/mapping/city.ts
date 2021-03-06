import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class City {

    // This property has no @JsonProperty. 
    // It will only be mapped if our JSON object contains a key named "id".
    // If there is no such element, no exception is thrown.
    // There will be no type checking at all.
    id: number = undefined; // <- assign a value or undefined to enable the mapper!

    // This maps the value of the JSON key "name" to the class property "name".
    // If the JSON value is not of type string (or missing), there will be an exception.
    @JsonProperty("name", String)
    name: string = undefined;
    
    // This maps the JSON key "founded" to the private class property "_founded".
    // Note the use of public getter and setter.
    // If the JSON value is not of type number (or missing), there will be an exception.
    @JsonProperty("founded", Number)
    private _founded: number = undefined;
    get founded() { return this._founded; }
    set founded(value: number) { this._founded = value; }
    
    // This maps the JSON key "beautiful" to the class property "beautiful".
    // If the JSON value is not of type boolean (or missing), there will be an exception.
    @JsonProperty("beautiful", Boolean)
    beautiful: boolean = undefined;
    
    // This maps the JSON key "data" to the class property "data".
    // We are not sure about the type, so we omit the second parameter.
    // There will be an exception if the JSON value is missing.
    @JsonProperty("data") // is the same as @JsonProperty("data", Any)
    data: any = undefined;
    
    // This maps the JSON key "keywords" to the class property "keywords".
    // This is an example of a string array. Note our syntax "[String]".
    // In the further examples at the end of this document, you can see how to nest complex arrays.
    @JsonProperty("keywords", [String])
    keywords: string[] = undefined; // or Array<string>
    
    @JsonProperty("mayor-name", String)
    mayorName: string = undefined;

    printInfo() {
        if (this.beautiful)
            console.log(this.name + " was founded in " + this.founded + " and is really beautiful! Mayor is " + this.mayorName);
        else
            console.log(this.name + " was founded in " + this.founded + ". Mayor is " + this.mayorName);
    }
    
}

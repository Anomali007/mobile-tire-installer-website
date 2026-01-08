export interface CoverageArea {
  name: string;
  type: "major-city" | "city" | "region";
}

export const coverageAreas: CoverageArea[] = [
  // Major Cities
  { name: "Milwaukee", type: "major-city" },
  { name: "Madison", type: "major-city" },
  { name: "Green Bay", type: "major-city" },
  { name: "Kenosha", type: "major-city" },
  { name: "Racine", type: "major-city" },
  { name: "Appleton", type: "major-city" },

  // Other Cities
  { name: "Waukesha", type: "city" },
  { name: "Oshkosh", type: "city" },
  { name: "Eau Claire", type: "city" },
  { name: "Janesville", type: "city" },
  { name: "West Allis", type: "city" },
  { name: "La Crosse", type: "city" },
  { name: "Sheboygan", type: "city" },
  { name: "Wauwatosa", type: "city" },
  { name: "Fond du Lac", type: "city" },
  { name: "New Berlin", type: "city" },
  { name: "Brookfield", type: "city" },
  { name: "Beloit", type: "city" },
  { name: "Greenfield", type: "city" },
  { name: "Manitowoc", type: "city" },
  { name: "West Bend", type: "city" },
  { name: "Sun Prairie", type: "city" },
  { name: "Oak Creek", type: "city" },
  { name: "Franklin", type: "city" },
  { name: "Menomonee Falls", type: "city" },
];

export const majorCities = coverageAreas.filter((area) => area.type === "major-city");
export const allCities = coverageAreas.filter((area) => area.type !== "region");

export const coverageDescription = "We offer mobile tire service across Wisconsin, including Milwaukee, Madison, Green Bay, and surrounding areas.";

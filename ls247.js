const manifest = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false,
};

 function normalizeUnits(manifest) {
  if (manifest.unit === "lb") {
    return {
      ...manifest,
      weight: Number((manifest.weight * 0.45).toFixed(2)),
      unit: "kg"
    };
  } 

  return { ...manifest };
}

const result = normalizeUnits(manifest);

console.log(result); 
console.log(manifest);

function validateManifest(manifest) {
  const errors = {};

  if (manifest === null || typeof manifest !== "object") {
    return {
      containerId: "Missing",
      destination: "Missing",
      weight: "Missing",
      unit: "Missing",
      hazmat: "Missing"
    };
  }

  if (!Object.hasOwn(manifest, "containerId")) {
    errors.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }

  if (!Object.hasOwn(manifest, "destination")) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!Object.hasOwn(manifest, "weight")) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  if (!Object.hasOwn(manifest, "unit")) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if (!Object.hasOwn(manifest, "hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

console.log(
  validateManifest({
    containerId: 1,
    destination: "Santa Cruz",
    weight: 304,
    unit: "kg",
    hazmat: false
  })
);

console.log(validateManifest({}));
console.log(validateManifest({ weight: NaN }));
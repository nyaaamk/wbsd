const normalizeUnits = (manifest) => {
  const lbToKg = 0.45;

  let unit = manifest.unit;
  let weight = manifest.weight;

  if (unit === "lb") {
    unit = "kg";
    weight = weight * lbToKg;
  }

  return {
    ...manifest,
    unit,
    weight
  };
};

const validateManifest = (manifest) => {
  const result = {};

  if (!("containerId" in manifest)) {
    result.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    result.containerId = "Invalid";
  }

  if (!("destination" in manifest)) {
    result.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    result.destination = "Invalid";
  }

  if (!("weight" in manifest)) {
    result.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    result.weight = "Invalid";
  }

  if (!("unit" in manifest)) {
    result.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    result.unit = "Invalid";
  }

  if (!("hazmat" in manifest)) {
    result.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    result.hazmat = "Invalid";
  }

  return result;
};

const processManifest = (manifest) => {
  const validation = validateManifest(manifest);

  if (Object.keys(validation).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
};
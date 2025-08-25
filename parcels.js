// const vehicles = [
//   { type: 'cycle', weightCapacity: 1},
//   { type: 'bike', weightCapacity: 5 },
//   { type: 'auto', weightCapacity: 20 },
//   { type: 'ace', weightCapacity: 50 },
//   { type: 'tempo', weightCapacity: 100 }
// ];
// const parcels = [
//   { location: 'velachery', weight: 30 },
//   { location: 'madipakkam', weight: 17 },
//   { location: 'sholinganallur', weight: 240 }
// ];

function findOptimisedVehiclesCount(parcels) {
    var availableVehicles = [
        { type: 'cycle', weightCapacity: 1 },
        { type: 'bike', weightCapacity: 5 },
        { type: 'auto', weightCapacity: 20 },
        { type: 'ace', weightCapacity: 50 },
        { type: 'tempo', weightCapacity: 100 }
    ];

    for (var i = 0; i < availableVehicles.length - 1; i++) {
        for (var j = 0; j < availableVehicles.length - i - 1; j++) {
            if (availableVehicles[j].weightCapacity < availableVehicles[j + 1].weightCapacity) {
                var temp = availableVehicles[j];
                availableVehicles[j] = availableVehicles[j + 1];
                availableVehicles[j + 1] = temp;
            }
        }
    }

    var results = [];

    for (var i = 0; i < parcels.length; i++) {
        var parcel = parcels[i];
        var location = parcel.location;
        var weight = parcel.weight;

        if (
            typeof location !== 'string' ||
            typeof weight !== 'number' ||
            weight <= 0
        ) {
            results.push({
                location: location,
                error: 'invalid weight: ' + weight
            });
            continue;
        }

        var remainingWeight = weight;
        var assigned = {};

        for (var v = 0; v < availableVehicles.length; v++) {
            var vehicle = availableVehicles[v];
            var count = 0;

            while (remainingWeight >= vehicle.weightCapacity) {
                remainingWeight = remainingWeight - vehicle.weightCapacity;
                count = count + 1;
            }

            if (count > 0) {
                assigned[vehicle.type] = count;
            }

            if (remainingWeight === 0) {
                break;
            }
        }

        if (remainingWeight !== 0) {
            results.push({
                location: location,
                error: 'cannot be exactly matched with available vehicles for weight: ' + weight
            });
        } else {
            results.push({
                location: location,
                vehicles: assigned
            });
        }
    }

    return results;
}

var parcels = [
    { location: 'velachery', weight: 30 },
    { location: 'madipakkam', weight: 17 },
    { location: 'sholinganallur', weight: 240 },
    { location: 'Guindy', weight: 400 },
    { location: 'NextSteet', weight: 0 },
    { location: 'Madurai', weight: -5 },
    { location: 'Theni', weight: 'heavy' },
    { location: 1234, weight: 10 },
    { location: 'perungudi', weight: 3 }
];

console.log(findOptimisedVehiclesCount(parcels))


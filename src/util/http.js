import { QueryClient } from "@tanstack/react-query";

export const queryClientObj = new QueryClient();

export async function fetchChildrenData({signal}){
    const response = await fetch(`http://localhost:8080/children`, {signal: signal});

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to load children data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of children data FAILED: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of children data: ", resData);
    return resData;
}

export async function postChildrenData(childrenData){
    const response = await fetch(`http://localhost:8080/children`,
        {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(childrenData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to add children data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to add children data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of add children data: ", resData);
    return resData;
}

export async function puttChildrenData({childrenData, id}){
    const response = await fetch(`http://localhost:8080/children/${id}`,
        {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(childrenData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to edit children data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to edit children data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of edit children data: ", resData);
    return resData;
}

export async function deleteChildrenData(id){
    const response = await fetch(`http://localhost:8080/children/${id}`,
        {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to delete children data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to delete children data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of delete children data: ", resData);
    return resData;
}

export async function fetchDriverData({signal}){
    const response = await fetch(`http://localhost:8080/driver`, {signal: signal});

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to load driver data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of driver data FAILED: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of driver data: ", resData);
    return resData;
}

export async function postDriverData(driverData){
    const response = await fetch(`http://localhost:8080/driver`,
        {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(driverData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to add driver data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to add driver data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of add driver data: ", resData);
    return resData;
}

export async function putDriverData({driverData, id}){
    const response = await fetch(`http://localhost:8080/driver/${id}`,
        {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(driverData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to edit driver data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to edit driver data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of edit driver data: ", resData);
    return resData;
}

export async function deleteDriverData(id){
    const response = await fetch(`http://localhost:8080/driver/${id}`,
        {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to delete driver data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to delete driver data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of delete driver data: ", resData);
    return resData;
}


export async function fetchCityTabData({signal}){
    const response = await fetch(`http://localhost:8080/cityTab`, {signal: signal});

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to load cityTab data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of cityTab data FAILED: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of cityTab data: ", resData);
    return resData;
}

export async function postCityTabData(cityTabData){
    const response = await fetch(`http://localhost:8080/cityTab`,
        {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cityTabData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to add cityTab data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to add cityTab data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of add cityTab data: ", resData);
    return resData;
}

export async function putCityTabData({cityTabData, id}){
    const response = await fetch(`http://localhost:8080/cityTab/${id}`,
        {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cityTabData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to edit cityTab data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to edit cityTab data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of edit cityTab data: ", resData);
    return resData;
}

export async function deleteCityTabData(id){
    const response = await fetch(`http://localhost:8080/cityTab/${id}`,
        {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to delete cityTab data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to delete cityTab data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of delete cityTab data: ", resData);
    return resData;
}

export async function fetchZoneTabData({signal}){
    const response = await fetch(`http://localhost:8080/zoneTab`, {signal: signal});

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to load ZoneTab data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of ZoneTab data FAILED: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of ZoneTab data: ", resData);
    return resData;
}

export async function postZoneTabData(zoneTabData){
    const response = await fetch(`http://localhost:8080/zoneTab`,
        {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(zoneTabData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to add zoneTab data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to add zoneTab data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of add zoneTab data: ", resData);
    return resData;
}

export async function putZoneTabData({zoneTabData, id}){
    const response = await fetch(`http://localhost:8080/zoneTab/${id}`,
        {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(zoneTabData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to edit zoneTab data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to edit zoneTab data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of edit zoneTab data: ", resData);
    return resData;
}

export async function deleteZoneTabData(id){
    const response = await fetch(`http://localhost:8080/zoneTab/${id}`,
        {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to delete zoneTab data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to delete zoneTab data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of delete zoneTab data: ", resData);
    return resData;
}

export async function fetchHotspotTabData({signal}){
    const response = await fetch(`http://localhost:8080/hotspotTab`, {signal: signal});

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to load hotspotTab data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of hotspotTab data FAILED: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of hotspotTab data: ", resData);
    return resData;
}

export async function postHotspotTabData(hotspotTabData){
    const response = await fetch(`http://localhost:8080/hotspotTab`,
        {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(hotspotTabData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to add hotspotTab data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to add hotspotTab data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of add hotspotTab data: ", resData);
    return resData;
}

export async function putHotspotTabData({hotspotTabData, id}){
    const response = await fetch(`http://localhost:8080/hotspotTab/${id}`,
        {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(hotspotTabData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to edit hotspotTab data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to edit hotspotTab data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of edit hotspotTab data: ", resData);
    return resData;
}

export async function deleteHotspotTabData(id){
    const response = await fetch(`http://localhost:8080/hotspotTab/${id}`,
        {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to delete hotspotTab data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to delete hotspotTab data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of delete hotspotTab data: ", resData);
    return resData;
}

export async function fetchVehicleData({signal}){
    const response = await fetch(`http://localhost:8080/vehicle`, {signal: signal});

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to load vehicle data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of vehicle data FAILED: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of vehicle data: ", resData);
    return resData;
}

export async function postVehicleData(vehicleData){
    const response = await fetch(`http://localhost:8080/vehicle`,
        {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(vehicleData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to add vehicle data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to add vehicle data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of add vehicle data: ", resData);
    return resData;
}

export async function putVehicleData({vehicleData, id}){
    const response = await fetch(`http://localhost:8080/vehicle/${id}`,
        {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(vehicleData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to delete vehicle data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to delete vehicle data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of delete vehicle data: ", resData);
    return resData;
}

export async function deleteVehicleData(id){
    const response = await fetch(`http://localhost:8080/vehicle/${id}`,
        {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to delete vehicle data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to delete vehicle data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of delete vehicle data: ", resData);
    return resData;
}

export async function fetchSchoolData({signal}){
    const response = await fetch(`http://localhost:8080/school`, {signal: signal});

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to load school data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of school data FAILED: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of school data: ", resData);
    return resData;
}

export async function postSchoolData(schoolData){
    const response = await fetch(`http://localhost:8080/school`,
        {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(schoolData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to add school data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to add school data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of add school data: ", resData);
    return resData;
}

export async function puttSchoolData({schoolData, id}){
    const response = await fetch(`http://localhost:8080/school/${id}`,
        {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(schoolData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to edit school data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to edit school data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of edit school data: ", resData);
    return resData;
}

export async function deleteSchoolData(id){
    const response = await fetch(`http://localhost:8080/school/${id}`,
        {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to delete school data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to delete school data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of delete school data: ", resData);
    return resData;
}

export async function fetchUserProfileData({signal}){
    const response = await fetch(`http://localhost:8080/userProfile`, {signal: signal});

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to load UserProfile data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of UserProfile data FAILED: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of UserProfile data: ", resData);
    return resData;
}

export async function postUserProfileData(userProfileData){
    const response = await fetch(`http://localhost:8080/userProfile`,
        {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userProfileData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to add UserProfile data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to add UserProfile data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of add UserProfile data: ", resData);
    return resData;
}

export async function putUserProfileData({userProfileData, id}){
    const response = await fetch(`http://localhost:8080/userProfile/${id}`,
        {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userProfileData),
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to edit UserProfile data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to edit UserProfile data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of edit UserProfile data: ", resData);
    return resData;
}

export async function deleteUserProfileData(id){
    const response = await fetch(`http://localhost:8080/userProfile/${id}`,
        {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        });

    if(!response.ok){
        console.log("response status: " + response.status);
        const error = new Error("Failed to delete UserProfile data");
        error.code = response.status;
        const resData = await response.json();
        console.log("res data of Failed to delete UserProfile data: ", resData);
        error.info = resData;
        throw error;
    }

    const resData = await response.json();
    console.log("res data of delete UserProfile data: ", resData);
    return resData;
}
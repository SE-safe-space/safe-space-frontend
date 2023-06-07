const TIME_OUT = 300*1000;

const statusError = {
    status: false,
    json: {
        error: ["연결이 원활하지 않습니다. 잠시 후 다시 시도해 주세요"]
    }
};

const requestPromise = (url, option) => {
    return fetch(url, option);
};

const timeoutPromise = () => {
    return new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), TIME_OUT));
};

const getPromise = async (url, option) => {
    return await Promise.race([
                                  requestPromise(url, option),
                                  timeoutPromise()
                              ]);
};

export const loginUser = async (credentials) => {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(credentials)
    };

    const data = await getPromise('https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/auth/login', option).catch(() => {
        return statusError;
    });

    if (parseInt(Number(data.status)/100)===2) {
        const status = data.ok;
        const code = data.status;
        const text = await data.text();
        const json = text.length ? JSON.parse(text) : "";

        return {
            status,
            code,
            json
        };
    } else {
        return statusError;
    }
};

export const logoutUser = async (credentials, accessToken) => {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(credentials)
    };

    const data = await getPromise('/logout-url', option).catch(() => {
        return statusError;
    });

    if (parseInt(Number(data.status)/100)===2) {
        const status = data.ok;
        const code = data.status;
        const text = await data.text();
        const json = text.length ? JSON.parse(text) : "";

        return {
            status,
            code,
            json
        };
    } else {
        return statusError;
    }
}

export const requestToken = async (refreshToken) => {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({ refresh_token: refreshToken })
    }

    const data = await getPromise('https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/auth/login', option).catch(() => {
        return statusError;
    });

    if (parseInt(Number(data.status)/100)===2) {
        const status = data.ok;
        const code = data.status;
        const text = await data.text();
        const json = text.length ? JSON.parse(text) : "";

        return {
            status,
            code,
            json
        };
    } else {
        return statusError;
    }
};

export const checkAuth = async (accessToken) => {
    try {
      const response = await fetch('https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/member/token', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
  
      if (!response.ok) {
        throw new Error('인증 확인 실패');
      }
  
      return response.json();
    } catch (error) {
      throw new Error(`인증 확인 중 오류 발생: ${error.message}`);
    }
  };
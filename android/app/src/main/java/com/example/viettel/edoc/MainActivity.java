package com.example.viettel.edoc;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.epicshaggy.biometric.NativeBiometric;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        registerPlugin(NativeBiometric.class);
    }
}
